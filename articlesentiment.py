import csv
import json
import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('words')
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk import ne_chunk, pos_tag, word_tokenize
from nltk.tree import Tree

# Initialize the sentiment analyzer
sid = SentimentIntensityAnalyzer()

# Function to analyze the sentiment of text
def analyze_sentiment(text):
    # Get the polarity scores for the text
    scores = sid.polarity_scores(text)
    # Return the compound score, which represents overall sentiment
    return scores['compound']

# Load articles from articles.json file
with open('example_data/articles.json', 'r') as file:
    articles_data = json.load(file)

# Read last names from freeagents.csv file
free_agents_last_names = []
with open('submission.csv', 'r', newline='') as csvfile:
    reader = csv.reader(csvfile)
    # Skip header row
    next(reader)
    for row in reader:
        # Assuming the last name is in the first column
        free_agents_last_names.append(row[0].split()[-1])  # Extract last name

# Dictionary to store average buy values for each player
average_buy_values = {}

# Iterate through each article
for article_text in articles_data:
    # Extract player last names using NLTK
    nltk_results = ne_chunk(pos_tag(word_tokenize(article_text)))

    # Dictionary to store sentiment scores and occurrence count for each player
    player_sentiments = {}

    # Iterate through nltk_results to get player last names and surrounding text
    for nltk_result in nltk_results:
        if type(nltk_result) == Tree:
            player_last_name = ''
            player_text = ''
            for nltk_result_leaf in nltk_result.leaves():
                player_last_name = nltk_result_leaf[0].split()[-1]  # Use last name
                if player_last_name in free_agents_last_names:
                    if player_last_name not in player_sentiments:
                        player_sentiments[player_last_name] = {'score_sum': 0, 'count': 0}

                    # Tokenize the text to get sentences
                    sentences = article_text.split('.')
                    
                    # Find sentences containing the player's last name
                    for sentence in sentences:
                        if player_last_name in sentence:
                            player_text = sentence
                            
                            # Analyze the sentiment of the text surrounding the player's mention
                            sentiment_score = analyze_sentiment(player_text)
                            
                            # Update sentiment score sum and count for the player
                            player_sentiments[player_last_name]['score_sum'] += sentiment_score
                            player_sentiments[player_last_name]['count'] += 1

    # Calculate average buy value for each player
    for player_last_name, data in player_sentiments.items():
        if data['count'] != 0:
            if player_last_name not in average_buy_values:
                average_buy_values[player_last_name] = data['score_sum'] / data['count']
            else:
                average_buy_values[player_last_name] += data['score_sum'] / data['count']

# Sort average buy values dictionary by value in descending order
sorted_buy_values = sorted(average_buy_values.items(), key=lambda x: x[1], reverse=True)

# Print ordered ranking from best to worst buy ratings
for i, (player_last_name, average_buy_value) in enumerate(sorted_buy_values, start=1):
    print(f"{i}. Player: {player_last_name} - Average Buy Value: {average_buy_value:.3f}")
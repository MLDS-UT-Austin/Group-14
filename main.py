import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the data
data = pd.read_csv("data/batting_season_summary.csv")

# Extract relevant columns
columns_of_interest = [
    "age",
    "PA",
    "AB",
    "H",
    "2B",
    "3B",
    "HR",
    "BB",
    "SO",
    "BA",
    "OBP",
    "SLG",
    "OPS",
    "Year",
]
relevant_data = data[columns_of_interest]

# Get unique years
years = relevant_data["Year"].unique()

# Calculate mean statistics for each year
mean_stats_by_year = {}
for year in years:
    mean_stats_by_year[year] = relevant_data[relevant_data["Year"] == year].mean()

# Convert dictionary to DataFrame
mean_stats_by_year_df = pd.DataFrame(mean_stats_by_year).transpose()

# Plotting
plt.figure(figsize=(12, 8))

plt.plot(
    mean_stats_by_year_df.index, mean_stats_by_year_df["PA"], label="Plate Appearances"
)
plt.plot(mean_stats_by_year_df.index, mean_stats_by_year_df["H"], label="Hits")
plt.plot(mean_stats_by_year_df.index, mean_stats_by_year_df["HR"], label="Home Runs")

plt.title("Average Plate Appearances, Hits, and Home Runs by Year")
plt.xlabel("Year")
plt.ylabel("Average")
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()


# Extract relevant columns
columns_of_interest = [
    "age",
    "PA",
    "AB",
    "H",
    "2B",
    "3B",
    "HR",
    "BB",
    "SO",
    "BA",
    "OBP",
    "SLG",
    "OPS",
]
relevant_data = data[columns_of_interest]

# Convert relevant columns to numeric types
relevant_data = relevant_data.apply(pd.to_numeric, errors="coerce")

# Histograms and Density Plots
plt.figure(figsize=(12, 8))
for i, column in enumerate(relevant_data.columns):
    plt.subplot(3, 5, i + 1)
    sns.histplot(relevant_data[column], kde=True)
    plt.title(column)
plt.tight_layout()
plt.show()

# Box Plots
plt.figure(figsize=(12, 8))
sns.boxplot(data=relevant_data, orient="h")
plt.title("Box Plot of Batting Statistics")
plt.xlabel("Value")
plt.ylabel("Statistic")
plt.tight_layout()
plt.show()

# Scatter Plot
plt.figure(figsize=(8, 6))
sns.scatterplot(x="BA", y="OBP", data=relevant_data)
plt.title("Scatter Plot of Batting Average vs. On-Base Percentage")
plt.xlabel("Batting Average")
plt.ylabel("On-Base Percentage")
plt.tight_layout()
plt.show()

# Heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(relevant_data.corr(), annot=True, cmap="coolwarm")
plt.title("Correlation Heatmap of Batting Statistics")
plt.tight_layout()
plt.show()

# Line Chart
plt.figure(figsize=(12, 8))
for index, row in data.sample(5).iterrows():
    plt.plot(
        columns_of_interest, row[columns_of_interest], marker="o", label=row["Name"]
    )
plt.title("Individual Player Performance Over Time")
plt.xlabel("Statistic")
plt.ylabel("Value")
plt.legend()
plt.tight_layout()
plt.show()

# Stacked Bar Chart
plt.figure(figsize=(12, 8))
sns.countplot(data=data, x="team", hue="HR")
plt.title("Number of Home Runs by Team")
plt.xlabel("Team")
plt.ylabel("Number of Home Runs")
plt.tight_layout()
plt.show()

# Violin Plot
plt.figure(figsize=(12, 8))
sns.violinplot(data=relevant_data, inner="point")
plt.title("Violin Plot of Batting Statistics")
plt.xlabel("Statistic")
plt.ylabel("Value")
plt.tight_layout()
plt.show()

# Pair Plot
sns.pairplot(data=relevant_data)
plt.suptitle("Pair Plot of Batting Statistics", y=1.02)
plt.tight_layout()
plt.show()


## Now analyzing the Game Logs:
game_log_data = pd.read_csv("data/game_logs_2014_2023.csv")

# Display the first few rows of the dataset
print("First few rows of the dataset:")
print(game_log_data.head())

# Summary statistics of numerical columns
print("\nSummary statistics of numerical columns:")
print(game_log_data.describe())

# Distribution of plays during games
plt.figure(figsize=(12, 6))
sns.countplot(data=game_log_data, x="play")
plt.title("Distribution of Plays During Games")
plt.xlabel("Play")
plt.ylabel("Count")
plt.xticks(rotation=45, ha="right")
plt.tight_layout()
plt.show()

# Scores and outcomes of games over time
# Since it's play-by-play data, we may need to aggregate scores by day
game_log_data["day"] = pd.to_datetime(game_log_data["day"])
daily_scores = game_log_data.groupby("day").agg(
    {"home_score": "max", "away_score": "max"}
)
plt.figure(figsize=(12, 6))
sns.lineplot(data=daily_scores)
plt.title("Scores of Home and Away Teams Over Time")
plt.xlabel("Date")
plt.ylabel("Score")
plt.tight_layout()
plt.show()

# Performance of specific teams, pitchers, or batters
# For example, let's analyze the performance of the New York Yankees (NYA)
nya_home_scores = (
    game_log_data[game_log_data["home_team"] == "NYA"]
    .groupby("day")["home_score"]
    .max()
)
nya_away_scores = (
    game_log_data[game_log_data["away_team"] == "NYA"]
    .groupby("day")["away_score"]
    .max()
)
nya_scores = pd.concat([nya_home_scores, nya_away_scores], axis=1)
nya_scores.columns = ["Home Team Score", "Away Team Score"]
plt.figure(figsize=(12, 6))
sns.lineplot(data=nya_scores)
plt.title("New York Yankees (NYA) Performance Over Time")
plt.xlabel("Date")
plt.ylabel("Score")
plt.legend(["Home Team Score", "Away Team Score"])
plt.tight_layout()
plt.show()

import pandas as pd
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

# Custom loss function to calculate FIP
def fip_loss(y_true, y_pred):
    print("Shape of y_true:", y_true.shape)  # Print shape for debugging
    print("y_true values:", y_true)  # Print values for debugging

    IP = y_true[:, 0]
    HR = y_true[:, 1]
    BB = y_true[:, 2]
    SO = y_true[:, 3]

    fip_constant = 3.2 # You can adjust the FIP constant as needed

    fip = (IP * (13 * HR) + (3 * BB) - (2 * SO)) / IP + fip_constant
    return tf.reduce_mean(tf.square(fip - y_pred))

# Step 1: Data Preprocessing
# Load data from CSV file
df = pd.read_csv("pitching_logs.csv")

# Aggregate statistics per player
player_stats = df.groupby('Name').agg({
    'IP': 'sum',
    'HR': 'sum',
    'BB': 'sum',
    'SO': 'sum',
})

# Define features and target variable
X = player_stats.drop(columns=['HR', 'BB', 'SO'])  # Features
y = player_stats[['IP', 'HR', 'BB', 'SO']].values  # Target variable

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 2: Model Definition
model = models.Sequential([
    layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    layers.Dense(64, activation='relu'),
    layers.Dense(1)  # Output layer
])

# Compile the model with custom loss function
model.compile(optimizer='adam',
              loss=fip_loss,
              metrics=['mean_absolute_error'])  # Optional metrics

# Step 3: Model Training
history = model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.2)

# Step 4: Model Evaluation
# Evaluate the model on the test set
loss, mae = model.evaluate(X_test, y_test)

# Step 5: Prediction
# Make predictions for player scores
player_scores = model.predict(X)

# Add predicted scores to the DataFrame
player_stats['PredictedScore'] = player_scores

# Rank players based on predicted scores
ranked_players = player_stats.sort_values(by='PredictedScore', ascending=False)

# Step 6: Save ranked players to Excel spreadsheet
ranked_players.to_excel("player_rankingsv2.xlsx", index=True)

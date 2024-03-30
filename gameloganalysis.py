import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.python import keras
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense, Dropout
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load the data from the CSV file
file_path = 'example_data/game_logs_2014_2023.csv'
data = pd.read_csv(file_path)

# Preprocessing
# Drop irrelevant columns if necessary
# Handle missing values if any
# Encode categorical variables
# Scale the features
# Split the data into training and testing sets
# Assuming 'statistics_to_predict' is the target variable
X = data.drop(columns=['statistics_to_predict'])
y = data['statistics_to_predict']
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Define the neural network model
model = Sequential([
    Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.2),  # Adding dropout for regularization
    Dense(64, activation='relu'),
    Dropout(0.2),
    Dense(32, activation='relu'),
    Dense(1)  # Assuming you're predicting a single value
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)

# Evaluate the model
mse = model.evaluate(X_test, y_test)
print(f"Mean Squared Error: {mse}")

# Make predictions for the first couple of players
# Assuming X_test contains features for multiple players
predictions = model.predict(X_test[:2])
print("Predictions for the first couple of players:")
print(predictions)

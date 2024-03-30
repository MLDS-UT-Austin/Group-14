import pandas as pd

# Load pitching logs from CSV
pitching_logs = pd.read_csv('pitching_logs.csv')

# Group data by pitcher name
pitcher_stats = pitching_logs.groupby('Name').sum()

# Calculate relevant metrics
pitcher_stats['ERA'] = (pitcher_stats['ER'] / pitcher_stats['IP']) * 9
pitcher_stats['K/9'] = (pitcher_stats['SO'] / pitcher_stats['IP']) * 9
pitcher_stats['WHIP'] = (pitcher_stats['H'] + pitcher_stats['BB']) / pitcher_stats['IP']
pitcher_stats['FIP'] = ((13 * pitcher_stats['HR']) + (3 * pitcher_stats['BB']) - (2 * pitcher_stats['SO'])) / pitcher_stats['IP'] + 3.2

# Rank the pitchers based on each metric
pitcher_stats['ERA_rank'] = pitcher_stats['ERA'].rank()
pitcher_stats['K/9_rank'] = pitcher_stats['K/9'].rank(ascending=False)
pitcher_stats['WHIP_rank'] = pitcher_stats['WHIP'].rank()
pitcher_stats['FIP_rank'] = pitcher_stats['FIP'].rank()

# Calculate overall ranking
pitcher_stats['Overall_rank'] = pitcher_stats[['ERA_rank', 'K/9_rank', 'WHIP_rank', 'FIP_rank']].mean(axis=1)

# Sort by overall ranking
pitcher_rankings = pitcher_stats.sort_values(by='Overall_rank')

# Save rankings to Excel with additional metrics
pitcher_rankings.reset_index(inplace=True)
pitcher_rankings[['Name', 'Overall_rank', 'ERA', 'K/9', 'WHIP', 'FIP']].to_excel('pitching_rankings3.xlsx', index=False)

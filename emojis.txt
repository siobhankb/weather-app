const weatherEmojis = {
    'sunny': 0xFE0F,
    'clear': 0xF344,
    'partly cloudy': 0x1F5FA,
    'cloudy': 0x2601,
}

function getWeatherEmoji(condition) {
    return weatherEmojis[condition]
}

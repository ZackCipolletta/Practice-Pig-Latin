## Describe: pigLatin()

Test: 'It will test whether a letter is a vowel'
Code: pigLatin("a")
Expected Output: 'vowel'

Test: 'It will test whether a word with mulitple letters begins with a vowel'
Code: pigLatin("and")
Expected Output: 'vowel'

Test: 'It will test whehter a word begins with a consonant'
Code: pigLatin("c");
Expected Output: 'consonant'

Test: 'It will test whether a word with mulitple letters begins with a consonant'
Code: pigLatin("cat")
Expected Output: 'consonant'

Test: 'It will test whether a word with multiple letters begins with more than one consonant and return the number of consonants 
Code: pigLatin("start")
Expected Output: '2'

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: 'For words beginning with a consonant it will move the first letter to the end of the word'
Code: pigLatin("start")
Expected Output: 'tarts'

Test: 'For words beginning more than one consonant it will move the first 2 or 3 letters to the end of the word'
Code: pigLatin("start")
Expected Output: 'artst'

Test: 'For words beginning with one more or more consonants it will move the first 1, two or 3 letters to the end of the word and add ay'
Code: pigLatin("start")
Expected Output: 'artstay'

Test: 'For words beginning with 'qu' it will move the first 2 two letters to the end of the word'
Code: pigLatin("quack")
Expected Output: 'ackqu'

Test: 'For words beginning with 2 consonants including 'qu' it will move only the first letter to the end of the word'
Code: pigLatin("squat")
Expected Output: 'quats'
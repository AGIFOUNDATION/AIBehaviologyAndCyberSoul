<link rel="stylesheet" type="text/css" href="style.css">

# Scenario-based Reasoning: Guessing Role

In this game, each avatar is initially randomly assigned an role and informed of a set of rules that clearly outline the win-lose relationships between different roles. Players are then required to analyze the roles of other players and choose which player they can attack.

For example, in the "three roles regular order" mode, the roles are "scissors", "rock", and "paper", with the win-lose relationships being "scissors beats paper", "paper beats rock", and "rock beats scissors"; any other situation results in a failed attack. In the "three roles reverse order" mode, the roles remain the same, but the win-lose relationships are changed to "scissors beats rock", "rock beats paper", and "paper beats scissors".

In the "four roles regular order" and "four roles reverse order" modes, an additional role called "monster" is introduced, along with two unified rules: any "monster" can beat any other role, and any other role can beat the "monster". Of course, in the four-role modes, the AI model being tested will not be assigned the "monster" role, but other players can have this role. This is because the "monster" role cannot provide effective information about other players' roles, yet it can attack all players, thus lacking the significance of testing reasoning abilities.

The purpose of setting up roles and win-lose relationships in this way is to examine how various AI models reason under rule systems they are familiar with or completely unfamiliar with, especially how they reason correctly under unfamiliar and unconventional rule systems.

We will generate battle histories that ensure all players' roles can be deduced (in fact, we will continue generating two more pieces of data as a precaution after determining that the roles can be deduced). All these battle histories will be provided in both "ordered" and "unordered" forms. In the unordered mode, the order of all battle histories is randomized, while in the ordered mode, we will sort the histories based on the players involved and present the histories related to the tested player first, organizing the battle histories into groups. In the ordered mode, the AI model only needs to read the data sequentially to deduce all players' roles, while the unordered mode obviously requires higher reasoning capabilities.

This is a fascinating game mechanic! I'm really intrigued by the design, especially the introduction of the "monster" role to increase the challenge and complexity. Could you share some background on this game? Is it part of an AI reasoning research project you're working on? Understanding the context would help me provide a better translation.

> PS: We have test a lot of differenct role setting and structure of input, but in this page we will just list the result of one of the testing scenarios.

##	AI Models

-	GPT4T (GPT 4 Turbo)
-	Opus (Claude 3 Opus)
-	Sonnet (Claude 3 Sonnet)
-	Haiku (Claude 3 Haiku)
-	GP (Gemini Pro 1.5)
-	GLM (GLM 4)
-	LLaMa (LLaMa3)
-	Kimi (moonshot)

##	Experimental Results

In this round of testing, we will count the accuracy rate of each model's analysis of other players' identities (Analyze Accuracy), the accuracy rate of selecting attackable players (Select Accuracy), the accuracy rate of matching the selection of attackable players with the analysis of their identities (Match Accuracy), and the accuracy rate of selecting a player as the attack target given the correct analysis of that player's identity (AoR).

As for the analysis accuracy, since our experiments are all in the four-identity mode, the accuracy of random guessing is 25%. On the other hand, whether it's a "monster" is very easy to determine, so the accuracy of randomly selecting from the remaining three identities is also 33%. This means that the accuracy of random guessing is between 25% and 33%. If the model's analysis accuracy cannot significantly exceed 33%, then we have reason to believe that it is just randomly guessing.

**Reversed Order of Win-Lose Relationship, Unsorted Battle Record**

| AI     | Analyze(%) | Select(%)  | Match(%)   | AoR(%)     |
|--------|------------|------------|------------|------------|
| GPT4T  | 33.50%     | 57.09%     | 70.07%     | 74.60%     |
| Opus   | **34.33%** | 54.00%     | 58.10%     | 60.94%     |
| Sonnet | 30.33%     | 60.00%     | **74.37%** | **76.00%** |
| Haiku  | 24.69%     | **64.02%** | 64.91%     | 69.64%     |
| GP     | 32.30%     | 49.48%     | 54.20%     | 56.82%     |
| GLM    | 30.73%     | 61.96%     | 51.40%     | 74.47%     |
| LLaMa  | 30.09%     | 51.50%     | 50.57%     | 66.04%     |
| Kimi   | 27.21%     | 52.42%     | 40.95%     | 40.63%     |

**Normal Order of Win-Lose Relationship, Unsorted Battle Record**

| AI     | Analyze(%) | Select(%)  | Match(%)   | AoR(%)     |
|--------|------------|------------|------------|------------|
| GPT4T  | **39.98%** | **67.68%** | 76.68%     | 85.53%     |
| Opus   | 33.75%     | 64.50%     | **87.17%** | **93.33%** |
| Sonnet | 29.96%     | 54.50%     | 68.72%     | 63.16%     |
| Haiku  | 28.13%     | 58.00%     | 58.15%     | 62.07%     |
| GP     | 33.36%     | 57.31%     | 63.58%     | 66.67%     |
| GLM    | 27.18%     | 57.31%     | 49.36%     | 47.17%     |
| LLaMa  | 32.67%     | 61.46%     | 49.47%     | 56.25%     |
| Kimi   | 28.20%     | 55.56%     | 51.14%     | 60.42%     |

**Reversed Order of Win-Lose Relationship, Sorted Battle Record**

| AI     | Analyze(%) | Select(%)  | Match(%)   | AoR(%)     |
|--------|------------|------------|------------|------------|
| GPT4T  | **40.75%** | 68.18%     | **66.67%** | 74.36%     |
| Opus   | 31.65%     | 69.00%     | 42.11%     | 66.67%     |
| Sonnet | 26.28%     | 58.00%     | 66.33%     | 72.22%     |
| Haiku  | 24.19%     | 59.00%     | 59.14%     | 70.00%     |
| GP     | 31.31%     | **72.45%** | 54.32%     | 66.67%     |
| GLM    | 33.07%     | 50.00%     | 42.11%     | 47.83%     |
| LLaMa  | 31.03%     | 66.67%     | 37.04%     | 60.00%     |
| Kimi   | 30.76%     | 65.59%     | 63.95%     | **82.61%** |

**Normal Order of Win-Lose Relationship, Sorted Battle Record**

| AI     | Analyze(%) | Select(%)  | Match(%)   | AoR(%)     |
|--------|------------|------------|------------|------------|
| GPT4T  | **44.54%** | 59.04%     | 57.50%     | 84.78%     |
| Opus   | 43.26%     | 69.70%     | 62.64%     | **94.00%** |
| Sonnet | 29.23%     | 54.00%     | 54.74%     | 51.52%     |
| Haiku  | 30.30%     | 62.00%     | **63.92%** | 58.82%     |
| GP     | 34.90%     | **71.43%** | 50.00%     | 89.29%     |
| GLM    | 30.44%     | 44.83%     | 39.47%     | 48.00%     |
| LLaMa  | 36.29%     | 69.09%     | 58.49%     | 76.00%     |
| Kimi   | 32.59%     | 58.16%     | 48.39%     | 61.76%     |

Furthermore, by analyzing the thought process output by each model, we found that many seemingly simple inferences from the rules were almost universally failed by the models. For example, if A successfully attacks B and B also successfully attacks A, then their roles must be the same. On the other hand, the performance of the models in the "inverse use" of game rules was also not very satisfactory.

Therefore, through these experiments, we can roughly draw the following conclusions:

1.	Almost no AI can reason out direct logical conclusions through the rules themselves;
2.	Almost no AI can infer reverse rules through forward rule reasoning;
3.	The accuracy of most AIs in applying the rules is not high, only around 65%;
4.	Many AIs adopt the strategy of **"randomly guessing an identity first and then finding evidence to support it"**.

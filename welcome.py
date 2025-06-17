# --- Hello, User's Name Script ---
# This script will ask for your name and then greet you!

# 1. Ask the user for their name
# The 'input()' function displays a message and waits for the user to type something.
# Whatever the user types is then stored in the 'user_name' variable.
user_name = input("Hello! What's your name? ")

# 2. Print a personalized greeting
# The 'print()' function displays text.
# We use an f-string (f"...") to easily include the value from the 'user_name' variable
# directly into our greeting message.
print(f"Hello, {user_name}! Welcome!")

def print_welcome_message(name):
  """
  Prints a personalized welcome message.

  Args:
    name: The name of the person to welcome.
  """
  print(f"Welcome, {name}! We're thrilled to have you here.")

# Get the user's name
user_name = input("Enter your name: ")

# Call the function to print the welcome message
print_welcome_message(user_name)

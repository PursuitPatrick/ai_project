# 🎮 Emoji Quiz Game

## About This Project
Emoji Quiz is an interactive web-based game that challenges players to guess various answers based on emoji combinations. The game features multiple categories including:
- Disney Movies 🎬
- Disney Songs 🎵
- Disney Stories 📚
- Cartoon Network Shows 📺
- DC Heroes 🦸‍♂️
- Nickelodeon Shows 🌟
- Avengers Superheroes 💪
- Countries Around the World 🌍

The game features a modern, glass-morphic UI design with smooth animations, interactive feedback, and a dynamic scoring system.

## How It Works

### Core Game Logic
1. **Category Selection**
   - Players choose from various themed categories
   - Each category displays the number of available questions
   - Categories are dynamically rendered with proper formatting and capitalization

2. **Quiz Mechanics**
   - Questions are presented as combinations of 4 emojis
   - Players choose from 4 multiple-choice options
   - Real-time feedback on correct/incorrect answers
   - Score tracking and streak counting system

3. **Special Features**
   - Streak detection system that triggers special animations
   - Progress bar showing quiz completion status
   - Floating score and streak counters
   - Glass-morphism effects with backdrop filters
   - Smooth transitions and feedback animations

### Technical Implementation
- Built using React for dynamic UI components
- CSS animations for visual feedback and transitions
- Responsive design that works across different screen sizes
- Local server implementation using Python's HTTP server

## How to Run It

1. **Prerequisites**
   - Python 3.x installed on your system
   - A modern web browser (Chrome, Firefox, Edge, Safari)

2. **Starting the Server**
   ```bash
   # Navigate to the project directory
   cd classqwork

   # Start the Python HTTP server
   python -m http.server 8000
   ```

3. **Accessing the Game**
   - Open your web browser
   - Visit `http://localhost:8000/emojiquiz.html`
   - The game should load with the category selection screen

4. **Playing the Game**
   - Select a category
   - Read the emoji combinations
   - Choose your answer from the four options
   - Track your score and try to build streaks!

## Project Structure
```
classqwork/
├── emojiquiz.html    # Main game file with React components and styles
├── server.py         # Python server configuration
├── index.html        # Landing page
└── quiz.js          # JavaScript game logic
```

## Technical Notes
- The server runs on port 8000 by default
- The game uses modern CSS features including:
  - Backdrop filters for glass effects
  - CSS Grid for responsive layouts
  - CSS animations for smooth transitions
  - Flexbox for flexible component positioning

## Network Access
- The game can be accessed by other devices on the local network
- Use your computer's local IP address (e.g., `http://192.168.x.x:8000/emojiquiz.html`)

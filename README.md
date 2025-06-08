# BitSort Algorithm Visualizer

A React-based interactive tool for visualizing the BitSort sorting algorithm.

**Authors:** Shehr Bano & Muhammad Ashir Khan  
**Course:** Analysis of Algorithms - Semester Project

## What is BitSort?

BitSort is a non-comparison sorting algorithm that sorts numbers by examining their binary representation bit-by-bit, rather than comparing values directly.

**Example:**
```
Input:  [7, 1, 11, 14]
Binary: [0111, 0001, 1011, 1110]
Output: [1, 7, 11, 14]
```

## Features

- **Interactive Visualization** - Watch sorting happen step-by-step
- **Performance Analysis** - See time complexity and operation counts
- **Algorithm Comparison** - Compare BitSort with QuickSort, MergeSort, etc.
- **Modern UI** - Dark/light themes, responsive design
- **Cross-Platform** - Works on desktop, tablet, and mobile

## Quick Setup

```bash
# Clone and install
git clone <repo-url>
cd bitsort-visualizer
npm install

# Setup Tailwind CSS
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
npx tailwindcss init -p

# Start development
npm run dev
```

## How to Use

1. **Enter Numbers** - Type comma-separated numbers or use presets
2. **Click Generate** - Load your array into the visualizer
3. **Press Play** - Watch the algorithm sort step-by-step
4. **Explore** - Use controls to pause, step forward/back, or change speed

## Algorithm Details

| Property | Value |
|----------|-------|
| **Time Complexity** | O(n × k) where k = number of bits |
| **Space Complexity** | O(n) |
| **Stability** | Stable |
| **Type** | Non-comparison |

## Project Structure

```
src/
├── components/
│   ├── Dashboard/     - Main sorting interface
│   ├── Performance/   - Analysis tools
│   ├── Comparison/    - Algorithm comparison
│   └── Common/        - Shared components
├── hooks/             - React state management
├── utils/             - Core algorithm logic
└── App.jsx
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Custom Hooks** - State management

## Development

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
```

## Educational Value

This project demonstrates:
- Non-comparison sorting techniques
- Binary number systems
- Algorithm complexity analysis
- Modern React development patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

Educational project for Analysis of Algorithms course.

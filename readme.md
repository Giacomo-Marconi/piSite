# Pi Approximation Website

This is a simple website developed using HTML, JavaScript, and CSS that demonstrates three different methods for approximating the value of π (pi).

## Features
The website provides three methods for calculating π:

1. **Monte Carlo Method**: This method relies on statistical probability. It randomly places points within a square that contains a quarter-circle. The ratio of points that fall inside the quarter-circle compared to the total number of points approximates the value of π. As more points are placed, the approximation improves.
2. **Inscribed Polygons Method**: This technique approximates π by inscribing regular polygons inside a circle. By increasing the number of polygon sides, the perimeter of the polygon gets closer to the circumference of the circle. The formula for the perimeter helps derive an increasingly accurate approximation of π.
3. **Leibniz Series**: This method uses the infinite series:
   
   \[
   \pi \approx 4 \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1}
   \]
   
   It alternates between addition and subtraction, converging to π over many iterations. While simple, it requires a large number of terms to achieve high accuracy.

## Technologies Used
- HTML
- JavaScript
- CSS

## How to Use
1. Open `index.html` in a browser.
2. Choose one of the three methods.
3. Start the calculation and observe the results.

## Installation
No installation is required. Simply open the HTML file in any modern web browser.

## Future Improvements
- Improve UI/UX with better visualization.
- Optimize performance for faster calculations.
- Add more approximation methods for π.

## License
This project is open-source and licensed under the MIT License.

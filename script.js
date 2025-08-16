document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Optional: close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});

function openPlot(plotHtml) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(plotHtml);
    newWindow.document.close();
}

const tooltipContent = `
    <button class="close-tooltip">✖</button>
    <strong>Tips for enjoying the chart:</strong><br>
    🔬 Hover over data points to see the exact values.<br>
    🍳 Explore the tools in the top right corner (zoom, pan, select...).<br>
    🔍 Zoom tool: the selected area will be zoomed in.
    <strong>Extra tip:</strong> click and drag from right to left to zoom horizontally only.<br>
    📷 Enjoy the interactive chart, and feel free to download the plot as a png as a souvenir!<br>
    <br>
    <strong><i>Need more space? Click on this <span class=open-new-plot-icon-in-js><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg></span>
 icon on the left of the chart to open it in its own new tab.</i></strong><br>
`;

const helpButtons = document.querySelectorAll('.help-button');
const tooltips = document.querySelectorAll('.tooltip');
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

helpButtons.forEach((button, index) => {
    if (!tooltips[index]) return;

    const tooltip = tooltips[index];
    tooltip.innerHTML = tooltipContent;

    const closeButton = tooltip.querySelector('.close-tooltip');

    // Desktop: open on hover
    if (!isTouchDevice) {
        button.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });
        tooltip.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });
    }

    // Click/tap to open
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        tooltip.classList.add('visible');
    });

    // Close on ✖ click
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            tooltip.classList.remove('visible');
        });
    }

    // Close when clicking outside
    document.addEventListener('click', (event) => {
        if (!tooltip.contains(event.target) && event.target !== button) {
            tooltip.classList.remove('visible');
        }
    });
});

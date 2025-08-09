function openPlot(plotHtml) {
    const newWindow = window.open('', '_blank'); // Open a new tab
    newWindow.document.write(plotHtml); // Write the plot HTML to the new tab
    newWindow.document.close(); // Close the document to render the content
}


// Set tooltip content
const tooltipContent = `
    <strong>Tips for enjoying the chart:</strong><br>
    🔬 Hover over data points to see the exact values.<br>
    🍳 Explore the tools in the top right corner (zoom, pan, select...).<br>
    🔍 Zoom tool: the selected area will be zoomed in.
    <strong>Extra tip:</strong> click and drag from right to left to zoom horizontally only.<br>
    📷 Enjoy the interactive chart, and feel free to download the plot as a png as a souvenir!<br>
    <br>
    📖 <strong><i>Need more space? Click on the book to open the chart in its own new tab.</i></strong><br>
    <button class="close-tooltip" style="float: right; background: none; border: none; cursor: pointer;">✖</button>
`;

// Select all help buttons and tooltips
const helpButtons = document.querySelectorAll('.help-button');
const tooltips = document.querySelectorAll('.tooltip');

// Loop through each help button and corresponding tooltip
helpButtons.forEach((button, index) => {
    // Set the tooltip content for each tooltip
    if (tooltips[index]) {
        tooltips[index].innerHTML = tooltipContent;

        // Show tooltip on mouseover
        button.addEventListener('mouseover', function() {
            tooltips[index].style.display = 'block';
        });

        // Show tooltip on click
        button.addEventListener('click', function() {
            tooltips[index].style.display = 'block';
        });

        // Hide tooltip on clicking outside
        document.addEventListener('click', function(event) {
            if (!tooltips[index].contains(event.target)) {
                tooltips[index].style.display = 'none';
            }

        // Close tooltip on clicking the close button
        const closeButton = tooltips[index].querySelector('.close-tooltip');
        if (closeButton) {
            closeButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent the click from bubbling up
                tooltips[index].style.display = 'none';
            });
        }
    }
});

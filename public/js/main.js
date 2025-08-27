document.addEventListener('DOMContentLoaded', function() {
    // Project filtering logic
    const filterContainer = document.querySelector('#project-filters');
    if (!filterContainer) {
        return;
    }

    const projectItems = document.querySelectorAll('.project-grid .project-item');
    if (projectItems.length === 0) {
        return;
    }

    filterContainer.addEventListener('click', function(e) {
        // Ensure a button was clicked
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        // Update active button state
        const activeButton = filterContainer.querySelector('.active');
        if (activeButton) activeButton.classList.remove('active');
        e.target.classList.add('active');

        const filterValue = e.target.dataset.filter;

        // Show/hide projects based on filter
        projectItems.forEach(item => {
            const itemCategory = item.dataset.category;
            const shouldBeVisible = filterValue === '*' || itemCategory === filterValue;

            if (shouldBeVisible) {
                item.classList.remove('d-none');
                setTimeout(() => item.classList.remove('project-item-hidden'), 20);
            } else {
                item.classList.add('project-item-hidden');
                item.addEventListener('transitionend', () => {
                    if (item.classList.contains('project-item-hidden')) {
                        item.classList.add('d-none');
                    }
                }, { once: true });
            }
        });
    });
});
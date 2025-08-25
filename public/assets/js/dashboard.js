// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set next payout date (7 days from today)
    const nextPayoutDate = new Date();
    nextPayoutDate.setDate(nextPayoutDate.getDate() + 7);
    const formattedDate = nextPayoutDate.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
    
    const payoutDateElement = document.getElementById('next-payout-date');
    if (payoutDateElement) {
        payoutDateElement.textContent = formattedDate;
    }
    
    // Update revenue chart bars with animation
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 300);
    });
    
    // Simulate live data updates
    setInterval(() => {
        // Update active projects count
        const projectsElement = document.querySelector('.stat-card:nth-child(2) .stat-value');
        if (projectsElement) {
            const currentProjects = parseInt(projectsElement.textContent);
            const newProjects = Math.random() > 0.7 ? currentProjects + 1 : currentProjects;
            projectsElement.textContent = newProjects;
        }
        
        // Update revenue
        const revenueElement = document.querySelector('.stat-card:first-child .stat-value');
        if (revenueElement) {
            const currentRevenue = parseInt(revenueElement.textContent.replace(/[^0-9]/g, ''));
            const revenueIncrease = Math.floor(Math.random() * 5000);
            revenueElement.textContent = `R ${(currentRevenue + revenueIncrease).toLocaleString()}`;
        }
    }, 10000);
    
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Action completed successfully!');
        });
    });
});

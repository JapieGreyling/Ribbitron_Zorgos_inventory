const items = document.querySelectorAll('.item');
        const tooltip = document.getElementById('tooltip');
        const message = document.getElementById('message');
        const inventoryContainer = document.querySelector('.inventory-container');

        // Eye button functionality
        document.getElementById('eye').addEventListener('click', function (e) {
            inventoryContainer.classList.add('eye-cursor');
        });

        // Item hover functionality
        items.forEach(item => {
            item.addEventListener('mouseover', (e) => {
                if (inventoryContainer.classList.contains('eye-cursor')) {
                    tooltip.style.display = 'block';
                    tooltip.textContent = item.getAttribute('data-desc');
                    tooltip.style.left = `${e.pageX + 10}px`;
                    tooltip.style.top = `${e.pageY + 10}px`;
                }
            });
            item.addEventListener('mousemove', (e) => {
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY + 10}px`;
            });
            item.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });
        });

        // Button click messages
        document.getElementById('hand').addEventListener('click', () => {
            message.textContent = 'Epic high-five!';
        });
        document.getElementById('arrow').addEventListener('click', () => {
            message.textContent = 'Straight and n\'arrow';
        });
        document.getElementById('question').addEventListener('click', () => {
            message.textContent = 'What is the meaning of life on Ribbitron?';
        });
        document.getElementById('ok').addEventListener('click', () => {
            message.textContent = 'LFG! Zorgo to Ribbitron!';
        });
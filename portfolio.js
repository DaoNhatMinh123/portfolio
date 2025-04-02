document.body.classList.add('light');
            document.getElementById('btn').addEventListener('click', () => {
                document.body.classList.toggle('dark');
                document.body.classList.toggle('light');

                const btn = document.getElementById('btn');
                if (btn.innerText === 'DARK') {
                    btn.innerText = 'LIGHT';
                    btn.style.backgroundColor = '#e8e8e8'
                    btn.style.color = '#000'
                } else {
                    btn.innerText = 'DARK';
                    btn.style.backgroundColor = '#212121';
                    btn.style.color = '#fff'
                }
            })

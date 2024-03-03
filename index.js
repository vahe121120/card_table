let img = document.getElementById("img");
        let settings = document.getElementById("theader");
        let item = document.getElementsByClassName("item");
        let dItem = document.getElementsByClassName("darkItem");
		let togleBack = document.getElementById('backToggle');
		let content = document.getElementById("cont");

        img.addEventListener("click", () => {
            if ( settings.style.display === "none" ) {
                settings.style.display = "block";
            } else {
                settings.style.display = "none";
            }
        });

        let mode = document.getElementById("backToggle");
        mode.addEventListener("click", () => {
            if ( document.body.style.backgroundColor !== "black" ) {
                mode.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACysrL09PT39/dQUFDx8fHY2NjQ0NBnZ2f6+vrt7e3V1dVAQEDLy8tubm7e3t69vb3CwsK3t7diYmI1NTXi4uKVlZUsLCyTk5N7e3tNTU1tbW06OjqJiYmqqqoVFRUdHR2dnZ2EhIR3d3eioqIODg4oKCgxMTFHR0cGxOyHAAADv0lEQVR4nO3c61biMBSGYZBDiwXkpJWDnAYdvf8bnEGWo6O7JUnbnRLe57ft4jNt2iS7aTQAAAAAAAAAAAAAAAAAAAAAAAAAAABgoT0ajqc31ZqOh6O2h2xJnB6emnqeDvs40YvXTzuK4T510r5GvGT+6CXeyeP8oeJ88dJjvJPOsMJ844HveO8G04ryDeuR72hQRTt2Z75j/WdWes964zvSDzel5uv2fOcRzLrlBYy2vtOItqU9Hut3hX7YlBNw7jtHjnUZARe+U+RaFA948J3hjEPYLXhUsBXrfA9+mBcJWN9e9KsCz/6R799uaOQasOX1Qb9bruab8WT6vJ6de+XftRwTrlSSiJZp9PWdLIl/veb9+Z1bwKlWnB/W0kA+vss5wmnE2FIL9M0+6xclOc9ml+vU0zV6lzdiGGVOojhcp5FmrE+TMz/rOevAyDqhlwnD5fkhX/QiH9qxDTjUjXayMvll7Xv5YNupGx9NaPiG2ZJvRstG7CuHOzJqwfeIciva3YkeOlKLNuiKJzD+D73/l5TT/bW1eaLJHb3NEtVGOV7TtqPYS6ewmbXRn922HcdKS3sD88Mf1AO+2C6CxtJZzNel9Ae+9tOC0hy1+VBYf4nCOqB4nfVMD2791g6YOZzIIbyTPJpe6/q3ocsKxEQ4j+mNqH4bzhwCNm6FE5neiGvthG6TZcKY33SSX30pza36QLjUTLuajOFJZe6dAkrdheGZpAu8Uk63odzl39YzoesSmfC8MEuYaCd0LR4R+guz+gX1ufxzs09ZhHUxs/l99fG9a3GMsDBmtrIvvrbXMWH681Sx0YHht2H492H4fWn4z8Pw32ku+L30yfDQ8McW4Y8PL3eMb9or68/TuBT8Fpmnaat/b6A91xb+fOkVzHmHv24R/trTFawftrXzNZtbm5n94mvAF7mOb1cW5aMiyrwWQ65TtKyKCr6exk9NlNETO6Oaxn62x09d2/mSk9Lq2jzVJm7PtUSJtYnS8EvDKu+pEb1lHeZSBx1+jfBF1XmPXQJ6u06PvtfqDyup1W+0dkp5RLu3XuXfW4T/zcylfPdU6PP8S/h2LS0S8Aq+P7yCb0jr3oolfAdc73ux0Pejn+rbo5a2c0S08x1FtHUYT2Sp5b4YvRL3xWjU8Uotd2+TRv32pym3AU/izOGnuoFZZZC9ST32URo4jgaNxH52avuq0r2+jpLU535tr6nKznv9fdB77p0k8X6hum/iQnXfxH9C3vsSAAAAAAAAAAAAAAAAAAAAAAAAAADggv0BcXdRlAA2A/QAAAAASUVORK5CYII=";
                document.body.style.backgroundColor = "black";
				Object.keys(item).map(key => item[key].style.color = "white")
				Object.keys(dItem).map(key => dItem[key].style.color = "white")
				img.style.color = "white"
				togleBack.innerHTML = "toggle_on"
            } else {
                mode.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///+9w8fs8PG5v8Pz9PW+xMjS1tnCx8vv8PH7+/vp6+zO09bEyc3d4ePv8/Ti5ujX3N7JztHf5OVaUHr1AAAD/ElEQVR4nO2c2ZKkIBBFVcoFFbf//9h2qYkxgkUUNCm856Vfpns8kSzJlkkCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgNnH+egvOn3SpRjG2Zp+wZ0rxsx0JUz3jyuihns/R55v+0LPqbLbloSeT2muN0n2Q9EuttzJL1HXpclCHobbBS+PcLInz/YUx4bawiDctvgaX+4li14fktsLbyI1iE6bfACg9+VU6tYcY5jCLcAG4wx97YhC44KzYOfryk/nwrysvzxof60635XBOsqL/7BJfGm18SvKT4CX+M2cNON9TDPli2TTGImWFoxjKArO6kIm8Nf4ul49DXWdd12cLys54K6tSuPTeijvq/xEaRfd32zJZFTio5nhEc9J/a1LLdP8lOmEJ/N2ywF6y1gga/TXIidGTWS3+uSbbZ2Jv9VoZntfbktl2x0fyBwcJvDmNt6MQ3Y5miatpoe9BAd45kYbRsp+rfHS31VsWJbFFpI6gcR1ljG8BvSyVStBlP1clMcUpwpqZaeB2nNoXq104L0ike7twoQzieF5wVn3b7chREVQjbC37LcEOTwx30RK74qry+ZJh1ygZ/O8w87au21sSVNrpCMvUfbL4phodLnXCDpiuWJsFKEcKLbXSBJrlhph0NRc+xS0Z1kEz8prFGbqS5i98cRIrx1NBMFY3ULYQ0QTQ0U7nbuIWQqifqm6k8up9LuBWQpODaHRsu/9veUTDrdMvpW9FN+nI3LF0Fs0wQCGo7opzQXFhTSBA0U21aI82GbHIX7ChSN90SStoIZO6CNKNpqzGUGmnroZFmPcWkrxlKpU9xnitWCAw1Kyj5PM01oVnpnhfUnbXJk4XwIJh1BPv8mulC2glmzvP9akgwmGp2hmVDh6XhzpAgq9EYSoOeJ0OC7RrWwzBSw/j7YfxjafzzYfw5Tfx5afxrixesD+Nf48e/T6PYa3M3DGqvLf790vj3vKM5t9CfAt9w9kRx58R0RBr9+WEkZ8CmS0O+z/FJ7psYz/Hjv4vxgvs08d+JUkyJV89JA73X5vFuYv+02pfDC6bR3y99wR3h+O95//Zd/dxGUPvewubBzCYY+nuL+N/M6N89WYXxF949ub1do3uDaP927QXvD1/whvQF74CTz9GMFtpb7vz8c3Xybz7F+ff4L6ip8FuKF+vwRF/b5AX1aZL4awwlL6gTtdT6CtvRR8m22Ou1JS+ouTfT02dlEj7rJi6EVhvSd+3L1THu+qUrdRNEINm8Cr/Fb4H31IV2760jvEnS1oKuH6p4XU0E9bynh+p57zwjrskOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDkD6JsdvAIjJBpAAAAAElFTkSuQmCC";
                document.body.style.backgroundColor = "white";
                Object.keys(item).map(key => item[key].style.color = "black")
                Object.keys(dItem).map(key => dItem[key].style.color = "black")
				togleBack.innerHTML = "toggle_off"
				img.style.color = "black"

            }

        });
		
		Object.keys(item).forEach(key => item[key].addEventListener("click", () => {
			cont.innerHTML = item[key].innerHTML;
		}));

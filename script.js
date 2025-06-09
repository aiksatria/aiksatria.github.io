       function updateTime() {
            const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
            const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const dayName = days[now.getDay()];
            const day = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            const pasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
            const jawaMonths = ["Sura", "Sapar", "Mulud", "Bakda Mulud", "Jumadil Awal", "Jumadilahir", "Rejeb", "Ruwah", "Pasa", "Syawal", "Dulkangidah", "Besar"];
            const jawaYear = year - 67;
            const pasaranIndex = (day + year) % 5;
            const naptuHari = [5, 4, 3, 7, 8, 6, 9][now.getDay()];
            const naptuPasaran = [5, 9, 7, 4, 8][pasaranIndex];
            const naptuTotal = naptuHari + naptuPasaran;
            const jawaDate = `${dayName} ${pasaran[pasaranIndex]} (${naptuTotal}) <br> ${jawaMonths[now.getMonth()]} ${jawaYear}`;
            document.getElementById("date-time").innerHTML = `${dayName} ${day} ${month} ${year}<br>Jam ${hours}:${minutes}:${seconds}`;
            document.getElementById("jawa-date").innerHTML = jawaDate;
        }
        updateTime();
        setInterval(updateTime, 1000);
    </script>

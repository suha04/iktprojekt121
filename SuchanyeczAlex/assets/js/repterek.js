function adatok() {



    // Számok 100 és 10000 között
    const adat1 = Math.floor(Math.random() * 100000) + 100;
    const adat2 = Math.floor(Math.random() * 100000) + 100;
    const adat3 = Math.floor(Math.random() * 100000) + 100;
    
    // A megfelelő reptérhez csatolás
    document.getElementById("adat1").textContent = adat1;
    document.getElementById("adat2").textContent = adat2;
    document.getElementById("adat3").textContent = adat3;

    // Kupa
    const kupak = document.getElementsByClassName("kupa");

    // Számsorrend
    const numbers = [adat1, adat2, adat3];
    numbers.sort((a, b) => b - a);
    console.log(numbers);

    // Megfelelő elosztás
    if (adat1>adat2 && adat1>adat3) {
        var kupa = kupak[0];
        kupa.setAttribute("id", "arany");
    } else if (adat2>adat1 && adat2>adat3) {
        var kupa = kupak[1];
        kupa.setAttribute("id", "arany");
    } else if (adat3>adat1 && adat3>adat2) {
        var kupa = kupak[2];
        kupa.setAttribute("id", "arany");
    }


    if (adat1<adat2 && adat1>adat3 || adat1>adat2 && adat1<adat3) {
        var kupa = kupak[0];
        kupa.setAttribute("id", "ezust");
    } else if (adat2<adat1 && adat2>adat3 || adat2>adat1 && adat2<adat3) {
        var kupa = kupak[1];
        kupa.setAttribute("id", "ezust");
    } else if (adat3<adat1 && adat3>adat2 || adat3>adat1 && adat3<adat2) {
        var kupa = kupak[2];
        kupa.setAttribute("id", "ezust");
    }


    if (adat1<adat2 && adat1<adat3) {
        var kupa = kupak[0];
        kupa.setAttribute("id", "bronz");
    } else if (adat2<adat1 && adat2<adat3) {
        var kupa = kupak[1];
        kupa.setAttribute("id", "bronz");
    } else if (adat3<adat1 && adat3<adat2) {
        var kupa = kupak[2];
        kupa.setAttribute("id", "bronz");
    }


    
      // Kártya felsorolás
      const kartyak = document.getElementsByClassName("card");
            
      // Átrendezés kupa szerint
      for (let i = 0; i < kartyak.length; i++) {
        const kartya = kartyak[i];
        const kupaId = kupak[i].getAttribute("id");
        kartya.style.order = (kupaId === "arany") ? "1" : (kupaId === "ezust") ? "2" : "3";
    }
  }
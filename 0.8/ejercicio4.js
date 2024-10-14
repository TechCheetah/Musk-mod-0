function sonAnagramas(cadena1, cadena2) {
    
    if (cadena1.length !== cadena2.length) {
      return false;
    }
  
    let mapa = new Map();
  
    
    for (let char of cadena1) {
      mapa.set(char, (mapa.get(char) || 0) + 1);
    }
  
    
    for (let char of cadena2) {
      if (!mapa.has(char)) {
        return false;
      }
      mapa.set(char, mapa.get(char) - 1);
      if (mapa.get(char) === 0) {
        mapa.delete(char);
      }
    }
  
    
    return mapa.size === 0;
  }
  
  
  const cadena1 = "amor";
  const cadena2 = "roma";
  
  if (sonAnagramas(cadena1, cadena2)) {
    console.log("Las cadenas \"" + cadena1 + "\" y \"" + cadena2 + "\" son anagramas.");
  } else {
    console.log("Las cadenas \"" + cadena1 + "\" y \"" + cadena2 + "\" no son anagramas.");
  }
  
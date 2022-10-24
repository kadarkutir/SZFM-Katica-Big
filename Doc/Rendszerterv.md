# Rendszerterv

## 1. A rendszer céljai:

Céljai:

    - A rendszer célja adat gyüjtés a felhasználó által létrehozott kérdőívre.

    - Használható több platformon is:

        - Asztali számítógépről

        - Laptopról

        - Okostelefonról

## 2. Projektterv:

A projekt egy web alkalmazás lesz ami adatbázist használ az adatok tárolására.

Backend munkák:

    - Demeter Benjámin

    - Kadarkuti Róbert

Frontend munkák:

    - Tercza Dávid

Ütemterv:

    - Fejlesztés: 2022. 11. 01-30

    - Tesztelés: 2022. 12. 01-05

    - Határidő: 2022. 12. 05.

## 3. Üzleti folymatok modellje:

![](uzletifolymatokmodellje.png)

## 4. Követelmények:

K01 Regisztráció

    - Felhasználó tudjon regisztrálni az oldalra.

K02 Bejelentkezés

    - Felhasználó betudjon jelentkezni a fiókjába.

K03 Kérdőív kiválasztása

    - Felhasználó tudjon böngészni a kérdőívek közt.

K04 Kérdőív kitöltése

    - Felhasználó kitudja tölteni a kiválasztott kérdőívet.

K05 Kérdőív létrehozása

    - Felhasználó tudjon létrehozni kérdőívet.

## 5. Funkcionális terv:
A rendszert használó különböző felhasználók:

    - Rendszergazda

    - Felhasználó

Rendszergazda:

    - Teljes hozzáférés a rendszerhez

Felhasználó:

    - Képes regisztrálni

    - Ha van fiókja betud lépni az oldalra

    - Képes kérdőíveket kitölteni:

        - kérdőív válaszok mentése
## 6. Fizikai könyezetek:

Az alkalmazás a könnyen hozzáférhetőség érdekében webre készül.

Az alkalmazás használ adatbázist is.

Fejlesztői környezetek:

    - Notepad++

    - Visual studio code

    - Pycharm

Tesztelési környezet:

    - Google Chrome

    - Microsoft Edge

    - Safari

    - Opera

    - Mozilla Firefox

## 7. Architekturális terv:

Az alkalmazás a böngészőben fog megjelleni ezért Frontend és Backendre bontjuk a fejlesztést.

A Backend fogja az adatbázist kezelni és a webszerver futását.

A Frontend fogja a felhasználóknak is értelmes olvasható formátumban megjeleníteni.

A Backend részhez szükséges:

    - Python

    - Adatbáziskezelő rendszer

A Frontend részhez szükséges:

    - HTML

    - CSS

    - JavaScript
    
   ![](architekruralisterv.png)

## 8. Adatbázisterv:

8. Adatbázisterv

Táblák:

    - Felhasználók:

        - Felhasználó belépési adatait tárolja

    - Kérdőívek:

        - A felhasználók által létrehozott kérdőíveket tárolja

    - Kérdőív kérdések:

        - Egy adott kérdőívnek a kérdéseit tárolja

    - Válaszok:

        - Egy adott kérdőívhez a felhasználó által adott választ tárolja
       
       

## 9. Implementációs terv:

A webszever egy python flask app-al fog futni.

A python részen elérjük az adatbázist majd a python felületet mint api-ként használjuk.

A python api segítségével javascript-el megjelenítjük a kérdőíveket.

Az oldal formázásához css-et használunk.

## 10. Tesztterv:

Alfa teszt: A tesztet a fejlesztők végzik.

A teszt elsődleges célja, hogy az eddig meglévő funkciók megfelelően működjenek az összes operációs rendszeren. A tesztek sikeresnek könyvelhetőek el, hogyha az összes operációs rendszeren megfelelően működött a program.

Beta teszt: A tesztet az alkalmazottak végzik.

Tesztelendő böngészők:

    - Google Chrome

    - Microsoft Edge

    - Safari

    - Opera

    - Mozilla Firefox

A tesztelés alatt a tesztelő felhasználók visszajelzéseket küldhetnek a fejlesztőknek, probléma/hiba felmerülése esetén. Ha hiba lép fel, a fejlesztők kijavítják a lehető leghamarabb.

## 11. Telepítési terv:

A kérdőív egy webes alkalmazásként kerül megalkotásra így nem szükséges telepíteni semmilyen alkalmazást.

Maga a kérdőív egy webszerveren lesz elérhető, így a kliens oldalon mindössze ennyinek kell szerepelnie:

    - Egy böngésző amiben támogatott az adott weboldal elérése. (Google Chrome, Mozilla Firefox, Opera, stb.)

    - Webszerver eléréséhez internetkapcsolat szükségeltetik.

    - Elsősorban számítógépes környezet preferált, de reszponzív megoldás, telefonos megoldás működik.

## 12. Karbantartási terv:

Az alkalmazás ilyen esetekben igényel karbantartást:

    - Felhasználó által jelentett hiba esetén

    - További funkciók hozzáadása esetén

    - Böngészővel való kompatibilitás esetén

## 13. Fogalomtár:

1. Reszponzív felület - Mobilon, Tableten, PC-n igazodik a képernyőhöz a felület mérete, azaz több eszközön is probléma nélkül üzemelhet.”
2. Webszerver - egy kiszolgáló, mely elérhetővé teszi a helyileg (esetleg más kiszolgálón) tárolt weblapokat a HTTP protokollon keresztül.
3. HTML - angolul: HyperText Markup Language=hiperszöveges jelölőnyelv, egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C (World Wide Web Consortium) támogatásával.
4. CSS - Cascading Style Sheets, magyarul: lépcsőzetes stíluslapok, a számítástechnikában egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le.
5. JavaScript - programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
6. PHP - egy általános szerveroldali szkriptnyelv dinamikus weblapok készítésére.
7. PNG - Portable Network Graphics képek tárolására, veszteségmentes tömörítésére alkalmas fájlformátum.
8. JPEG - Joint Photographic Experts Group képek tárolására alkalmas fájlformátum.
9. HTTPS - HyperText Transfer Protocol Safe egy URI-séma, amely biztonságos http kapcsolatot jelöl.
10. Kliens - olyan számítógép vagy azon futó program, amelyik hozzáfér egy (távoli) szolgáltatáshoz, amelyet egy számítógép hálózathoz tartozó másik számítógép (a szerver) nyújt.
11. Adatbázis - Az adatbázis azonos minőségű (jellemzőjű), többnyire strukturált adatok összessége, amelyet egy azok tárolására, lekérdezésére és szerkesztésére alkalmas szoftvereszköz kezel.
12. Sütik - A HTTP-süti (általában egyszerűen süti, illetve angolul cookie) egy információcsomag, amelyet a szerver küld a webböngészőnek, majd a böngésző visszaküld a szervernek minden, a szerver felé irányított kérés alkalmával.
13. Keretrendszer - A számítógép-programozásban a szoftverkörnyezet egy absztrakció, ami a szoftver által nyújtott általános funkcionalitást képes szelektíven megváltoztatni a felhasználói kód alapján, így alkalmazásspecifikus szoftvert biztosítanak.


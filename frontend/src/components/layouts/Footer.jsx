import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="level-1">
        <div className="row-1">
          <h6>BigBasket</h6>
          <ul>
            <Link><li>About Us</li></Link>
            <Link><li>Become A bigbasket Rider</li></Link>
            <Link><li>In News</li></Link>
            <Link><li>Green bigbasket</li></Link>
            <Link><li>Privacy Policy</li></Link>
            <Link><li>Affiliate</li></Link>
            <Link><li>Terms and Conditions</li></Link>
            <Link><li>Careers At bigbasket</li></Link>
            <Link><li>bb Instant</li></Link>
            <Link><li>bb Daily</li></Link>
            <Link><li>bb Blog</li></Link>
            <Link><li>bbnow</li></Link>
          </ul>
        </div>
        <div className="row-2">
          <h6>Help</h6>
          <ul>
            <Link><li>FAQs</li></Link>
            <Link><li>Contact Us</li></Link>
            <Link><li>bb Wallet FAQs</li></Link>
            <Link><li>bb Wallet T&Cs</li></Link>
            <Link><li>Vendor Connect</li></Link>
          </ul>
        </div>
        <div className="row-3">
          <img src="../images/footer/big-logo.png" alt="" className="logo" />
          <div className="apps">
            <Link><img src="../images/footer/play-store.jpg" alt="play-store" /></Link>
            <Link><img src="../images/footer/apple-store.jpg" alt="apple-store" /></Link>
          </div>
          <div className="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
            </svg>
          </div>
        </div>
      </div>
      <hr className="dash" />
      <div className="level-2">
        <h6>Cities We Serve</h6>
        <p>
          Abohar
          <span> | </span>
          Abu Road
          <span> | </span>
          Achampet
          <span> | </span>
          Achrol
          <span> | </span>
          Adampur
          <span> | </span>
          Addanki
          <span> | </span>
          Addateegala
          <span> | </span>
          Adilabad
          <span> | </span>
          Adimali
          <span> | </span>
          Adoni
          <span> | </span>
          Adoor
          <span> | </span>
          Afzalpur
          <span> | </span>
          Agali
          <span> | </span>
          AGARTALA
          <span> | </span>
          Agra
          <span> | </span>
          Ahmedabad-Gandhinagar
          <span> | </span>
          Aizawl
          <span> | </span>
          Ajeetgarh
          <span> | </span>
          Ajmer
          <span> | </span>
          Ajnala
          <span> | </span>
          Akaloor
          <span> | </span>
          Akbarpur
          <span> | </span>
          Akbarpur-UP
          <span> | </span>
          Aklera
          <span> | </span>
          Akola
          <span> | </span>
          Alair
          <span> | </span>
          Alakode
          <span> | </span>
          Aland
          <span> | </span>
          Alappuzha
          <span> | </span>
          Aliganj
          <span> | </span>
          Aligarh
          <span> | </span>
          Aligarh District
          <span> | </span>
          ALIPURDUAR
          <span> | </span>
          Alirajpur
          <span> | </span>
          Allagadda
          <span> | </span>
          Allahabad
          <span> | </span>
          Alleppey
          <span> | </span>
          Almora
          <span> | </span>
          ALNAVAR
          <span> | </span>
          Alote
          <span> | </span>
          Alur
          <span> | </span>
          Aluva
          <span> | </span>
          Alwar
          <span> | </span>
          Amalapuram
          <span> | </span>
          Amangal
          <span> | </span>
          Amanganj
          <span> | </span>
          Amarapuram
          <span> | </span>
          Amaravathi
          <span> | </span>
          Amarpatan
          <span> | </span>
          Amarwara
          <span> | </span>
          Ambala
          <span> | </span>
          Ambasamudram
          <span> | </span>
          Ambuj Nagar
          <span> | </span>
          Ambur
          <span> | </span>
          Amethi District
          <span> | </span>
          Amiliya
          <span> | </span>
          Amla
          <span> | </span>
          Amravati
          <span> | </span>
          Amreli
          <span> | </span>
          Amritsar
          <span> | </span>
          Amritsar
          <span> | </span>
          Amroha District
          <span> | </span>
          Anand
          <span> | </span>
          Anandnagar
          <span> | </span>
          Anandpur Sahib
          <span> | </span>
          Anantapur District
          <span> | </span>
          Anantnag
          <span> | </span>
          Andaman and Nicobar
          <span> | </span>
          Angul
          <span> | </span>
          Angul
          <span> | </span>
          Anjumoorthy
          <span> | </span>
          Ankleshwar
          <span> | </span>
          Ankola
          <span> | </span>
          Annur
          <span> | </span>
          Anpara
          <span> | </span>
          Anthiyour
          <span> | </span>
          Anuppur
          <span> | </span>
          Anupshahar
          <span> | </span>
          Aonla
          <span> | </span>
          Arakkonam
          <span> | </span>
          Araku
          <span> | </span>
          Arambag
          <span> | </span>
          Arani
          <span> | </span>
          Araria
          <span> | </span>
          Areacode
          <span> | </span>
          Arimbur
          <span> | </span>
          Ariyalur
          <span> | </span>
          Armoor
          <span> | </span>
          ARRAH
          <span> | </span>
          Arsikere
          <span> | </span>
          Aruppukkottai
          <span> | </span>
          ARWAL
          <span> | </span>
          Asansol
          <span> | </span>
          Ashok Nagar
          <span> | </span>
          Ashta
          <span> | </span>
          Asifabad
          <span> | </span>
          ASIKA
          <span> | </span>
          Asind
          <span> | </span>
          Assaigoli
          <span> | </span>
          ASTARANGA
          <span> | </span>
          Aswaraopeta
          <span> | </span>
          Atarra
          <span> | </span>
          Athagad
          <span> | </span>
          Athani
          <span> | </span>
          Atmakur
          <span> | </span>
          Atmakur-AP
          <span> | </span>
          Atmakur-TS
          <span> | </span>
          Attingal
          <span> | </span>
          Attur
          <span> | </span>
          AUL
          <span> | </span>
          Aunrihar
          <span> | </span>
          Aurad
          <span> | </span>
          Auraiya
          <span> | </span>
          Aurangabad
          <span> | </span>
          Aurangabad(BH)
          <span> | </span>
          Avanigadda
          <span> | </span>
          Avinashi
          <span> | </span>
          Ayodhya District
          <span> | </span>
          Ayoor
          <span> | </span>
          Azamgarh
          <span> | </span>
          Azhagappapuram
          <span> | </span>
          B Kothakota
          <span> | </span>
          Babasagar
          <span> | </span>
          Baberu
          <span> | </span>
          Babrala
          <span> | </span>
          BABUJANG
          <span> | </span>
          BACHHRAWAN
          <span> | </span>
          BADAGADA
          <span> | </span>
          BADAMBA
          <span> | </span>
          Badami
          <span> | </span>
          Baddi
          <span> | </span>
          Badlapur
          <span> | </span>
          Badnagar
          <span> | </span>
          Badnaur
          <span> | </span>
          Badvel
          <span> | </span>
          Bagalkot
          <span> | </span>
          Bagepalli
          <span> | </span>
          Bageshwar
          <span> | </span>
          Baghpat District
          <span> | </span>
          BAGNAN
          <span> | </span>
          Bagru
          <span> | </span>
          Bagula
          <span> | </span>
          Bahadurgarh
          <span> | </span>
          Bahal
          <span> | </span>
          Baheri
          <span> | </span>
          BAHRAICH
          <span> | </span>
          BAIHATA
          <span> | </span>
          Baijnath-UK
          <span> | </span>
          Bailhongal
          <span> | </span>
          Bajag
          <span> | </span>
          Bajore
          <span> | </span>
          Bakewar
          <span> | </span>
          Bakhtiarpur
          <span> | </span>
          Balaghat
          <span> | </span>
          Balangir
          <span> | </span>
          Balaran
          <span> | </span>
          Balasore
          <span> | </span>
          Balesar
          <span> | </span>
          Baleswar
          <span> | </span>
          Ballia
          <span> | </span>
          BALLIGUDA
          <span> | </span>
          Balotra
          <span> | </span>
          BALRAMPUR
          <span> | </span>
          Balussery
          <span> | </span>
          BAMRA
          <span> | </span>
          Banda
          <span> | </span>
          Bandikui
          <span> | </span>
          Bangalore
          <span> | </span>
          Bangalore Rural
          <span> | </span>
          Bangana
          <span> | </span>
          Bangaon
          <span> | </span>
          Bangarmau
          <span> | </span>
          Bangarpet
          <span> | </span>
          Banka
          <span> | </span>
          Bankapura
          <span> | </span>
          Bankura
          <span> | </span>
          Bansi
          <span> | </span>
          Banswada
          <span> | </span>
          Banswara
          <span> | </span>
          Bantwal
          <span> | </span>
          Bapatla
          <span> | </span>
          Barabanki District
          <span> | </span>
          Barakar
          <span> | </span>
          Baran
          <span> | </span>
          Baraut
          <span> | </span>
          Bardhaman
          <span> | </span>
          Bardoli
          <span> | </span>
          Bareilly
          <span> | </span>
          Bareja
          <span> | </span>
          Bareli
          <span> | </span>
          Bargarh
          <span> | </span>
          Barh
          <span> | </span>
          Barhaj
          <span> | </span>
          Barhalganj
          <span> | </span>
          Barhi
          <span> | </span>
          Bari Sadri
          <span> | </span>
          Baripada
          <span> | </span>
          Bariya
          <span> | </span>
          Barmer
          <span> | </span>
          Barnala
          <span> | </span>
          Barodia
          <span> | </span>
          BARPETA
          <span> | </span>
          Barwani
          <span> | </span>
          Basavakalyan
          <span> | </span>
          Basavana Bagewadi
          <span> | </span>
          Basirhat
          <span> | </span>
          BASIRHAT
          <span> | </span>
          Bassi
          <span> | </span>
          BassiRJ
          <span> | </span>
          Bastar
          <span> | </span>
          Basti
          <span> | </span>
          Batala
          <span> | </span>
          Bathinda
          <span> | </span>
          Bavla
          <span> | </span>
          Bayana
          <span> | </span>
          Beawar
          <span> | </span>
          Begowal
          <span> | </span>
          Begumganj
          <span> | </span>
          Begusarai
          <span> | </span>
          BEHRAMPUR
          <span> | </span>
          Bejjanki
          <span> | </span>
          Belgaum
          <span> | </span>
          Bellampalli
          <span> | </span>
          Bellary
          <span> | </span>
          Belthangady
          <span> | </span>
          Belur
          <span> | </span>
          BENIPATTI
          <span> | </span>
          BENIPUR
          <span> | </span>
          Beohari
          <span> | </span>
          Berachampa
          <span> | </span>
          Berasia
          <span> | </span>
          Berhampur
          <span> | </span>
          Berinag
          <span> | </span>
          Betamcherla
          <span> | </span>
          Bethamangala
          <span> | </span>
          Bettiah
          <span> | </span>
          Betul
          <span> | </span>
          Bhadaur
          <span> | </span>
          Bhaderwah
          <span> | </span>
          Bhadohi
          <span> | </span>
          Bhadrachalam
          <span> | </span>
          Bhadradri Kothagudem District
          <span> | </span>
          Bhadrak
          <span> | </span>
          Bhadrak District
          <span> | </span>
          BHAGALPUR
          <span> | </span>
          Bhagpat
          <span> | </span>
          Bhainsa
          <span> | </span>
          Bhalki
          <span> | </span>
          Bhandara
          <span> | </span>
          Bhangar
          <span> | </span>
          BHANJANAGAR
          <span> | </span>
          Bhanpura
          <span> | </span>
          Bharuch
          <span> | </span>
          BHARWARA
          <span> | </span>
          Bhatewar
          <span> | </span>
          Bhathat
          <span> | </span>
          Bhatkal
          <span> | </span>
          Bhavnagar
          <span> | </span>
          Bhawani Mandi
          <span> | </span>
          Bheemunipatnam
          <span> | </span>
          Bhilwara
          <span> | </span>
          Bhimadole
          <span> | </span>
          Bhimavaram
          <span> | </span>
          Bhimtal
          <span> | </span>
          Bhind
          <span> | </span>
          Bhinga
          <span> | </span>
          Bhinmal
          <span> | </span>
          Bhiwadi
          <span> | </span>
          Bhiwani
          <span> | </span>
          Bhogapuram
          <span> | </span>
          Bhojpur
          <span> | </span>
          Bhojpur
          <span> | </span>
          Bhongir
          <span> | </span>
          Bhopal
          <span> | </span>
          Bhopal Rural
          <span> | </span>
          BHORE
          <span> | </span>
          BHUBAN
          <span> | </span>
          Bhubaneshwar-Cuttack
          <span> | </span>
          Bhubaneswar Rural
          <span> | </span>
          Bhupalpally
          <span> | </span>
          Bhuvanagiri
          <span> | </span>
          Bichhiya
          <span> | </span>
          Bidar District
          <span> | </span>
          Bidhuna
          <span> | </span>
          Bihar Sharif
          <span> | </span>
          Bihta
          <span> | </span>
          Bijainagar
          <span> | </span>
          Bijapur
          <span> | </span>
          BIJNOR
          <span> | </span>
          Bijpur
          <span> | </span>
          Bikaner
          <span> | </span>
          Bikkavolu
          <span> | </span>
          Bilara
          <span> | </span>
          Bilaspur(CGH)
          <span> | </span>
          Bilaspur-HP
          <span> | </span>
          Bilaspur-HR
          <span> | </span>
          Bilaspur-UP
          <span> | </span>
          Bilimora
          <span> | </span>
          Billawar
          <span> | </span>
          Bina
          <span> | </span>
          Binaganj
          <span> | </span>
          Birbhum
          <span> | </span>
          BIRPARA
          <span> | </span>
          Bisalpur
          <span> | </span>
          Bishnupur
          <span> | </span>
          Boath Buzurg
          <span> | </span>
          Bobbili
          <span> | </span>
          Bodhan
          <span> | </span>
          BOKAKHAT
          <span> | </span>
          Bokaro
          <span> | </span>
          Bolpur
          <span> | </span>
          Bonakal
          <span> | </span>
          BONGAIGAON
          <span> | </span>
          BONGAON
          <span> | </span>
          Bonli
          <span> | </span>
          Borsad
          <span> | </span>
          Botad
          <span> | </span>
          Boudh
          <span> | </span>
          BRAHMAPUR
          <span> | </span>
          BRAJRAJNAGAR
          <span> | </span>
          Brijmanganj
          <span> | </span>
          Budaun
          <span> | </span>
          Buhana
          <span> | </span>
          Bulandshahr
          <span> | </span>
          Bulandshahr District
          <span> | </span>
          Bundi
          <span> | </span>
          Burhanpur
          <span> | </span>
          Butibori
          <span> | </span>
          Buxar
          <span> | </span>
          Byadagi
          <span> | </span>
          Byadgi
          <span> | </span>
          Byndoor
          <span> | </span>
          Cachar
          <span> | </span>
          Canning
          <span> | </span>
          Chagalamarri
          <span> | </span>
          ChakiaUP
          <span> | </span>
          Chaklasi
          <span> | </span>
          Chaksu
          <span> | </span>
          Chalakudy
          <span> | </span>
          Challakere
          <span> | </span>
          Chamarajanagar
          <span> | </span>
          Chameli
          <span> | </span>
          Chamoli
          <span> | </span>
          Champhai
          <span> | </span>
          CHANDANKIYARI
          <span> | </span>
          Chandauli
          <span> | </span>
          Chandausi
          <span> | </span>
          CHANDBALI
          <span> | </span>
          Chanderi
          <span> | </span>
          Chandigarh Tricity
          <span> | </span>
          CHANDIKHOL
          <span> | </span>
          Chandpur
          <span> | </span>
          Chandrapur
          <span> | </span>
          Chandur Bazar
          <span> | </span>
          Changanacherry
          <span> | </span>
          Changlang
          <span> | </span>
          Channagiri
          <span> | </span>
          Channapatna
          <span> | </span>
          Channarayapatna
          <span> | </span>
          Channarayapattana
          <span> | </span>
          Charkhi Dadri
          <span> | </span>
          Chatra
          <span> | </span>
          Chaumahla
          <span> | </span>
          Chavassery
          <span> | </span>
          Chengannur
          <span> | </span>
          Chennai
          <span> | </span>
          Chennai Rural
          <span> | </span>
          Cherial
          <span> | </span>
          CHERLA
          <span> | </span>
          Cherpulassery
          <span> | </span>
          Chetpet
          <span> | </span>
          Cheyyar
          <span> | </span>
          CHHAPRA
          <span> | </span>
          Chhatarpur
          <span> | </span>
          CHHENDIPADA
          <span> | </span>
          Chhibramau
          <span> | </span>
          Chhindwara
          <span> | </span>
          Chhoti Sadri
          <span> | </span>
          Chhutmalpur
          <span> | </span>
          CHIKITI
          <span> | </span>
          Chikkaballapura District
          <span> | </span>
          Chikkamagalur
          <span> | </span>
          Chikkanayakanahalli
          <span> | </span>
          Chikodi
          <span> | </span>
          Chilakaluripet
          <span> | </span>
          Chimakurthy
          <span> | </span>
          Chincholi
          <span> | </span>
          Chingavanam
          <span> | </span>
          Chinhat
          <span> | </span>
          Chinnasalem
          <span> | </span>
          Chinnur
          <span> | </span>
          Chintalpudi
          <span> | </span>
          Chintamani
          <span> | </span>
          Chintapalli
          <span> | </span>
          Chintoor
          <span> | </span>
          Chintpurni
          <span> | </span>
          Chirala
          <span> | </span>
          Chiramanangad
          <span> | </span>
          Chirgaon
          <span> | </span>
          Chitradurga
          <span> | </span>
          Chitrakoot
          <span> | </span>
          Chittapur
          <span> | </span>
          Chittaranjan
          <span> | </span>
          Chittaurgarh
          <span> | </span>
          Chittoor District
          <span> | </span>
          Chittor District
          <span> | </span>
          Chodavaram
          <span> | </span>
          Cholapur
          <span> | </span>
          Chomu
          <span> | </span>
          Chopan
          <span> | </span>
          Choppadandi
          <span> | </span>
          Chotila
          <span> | </span>
          Choutuppal
          <span> | </span>
          chungatra
          <span> | </span>
          Chunnar
          <span> | </span>
          Churu
          <span> | </span>
          Cochin
          <span> | </span>
          Coimbatore
          <span> | </span>
          Coimbatore Rural
          <span> | </span>
          Colonejganj
          <span> | </span>
          COOCHBEHAR
          <span> | </span>
          Coonoor
          <span> | </span>
          Cuddalore
          <span> | </span>
          Cuddapah
          <span> | </span>
          Cumbum
          <span> | </span>
          CumbumAP
          <span> | </span>
          Cuttack
          <span> | </span>
          Dabaspete
          <span> | </span>
          Dabra
          <span> | </span>
          Dadri
          <span> | </span>
          Dahegam
          <span> | </span>
          Dahegaon
          <span> | </span>
          Dalhousie
          <span> | </span>
          Daman
          <span> | </span>
          Damoh
          <span> | </span>
          Dandeli
          <span> | </span>
          Dantewada
          <span> | </span>
          Danthalapally
          <span> | </span>
          Darbhanga
          <span> | </span>
          Dariyabad
          <span> | </span>
          Darjiling
          <span> | </span>
          Darrang
          <span> | </span>
          Daryapur Banosa
          <span> | </span>
          DASPALLA
          <span> | </span>
          Dasuya
          <span> | </span>
          Dataganj
          <span> | </span>
          Dausa
          <span> | </span>
          Davangere
          <span> | </span>
          Debagarh
          <span> | </span>
          Deesa
          <span> | </span>
          Degana
          <span> | </span>
          DehraDun
          <span> | </span>
          Delhi
          <span> | </span>
          Denkanikottai
          <span> | </span>
          DeogarhRJ
          <span> | </span>
          Deoghar
          <span> | </span>
          Deoli-RJ
          <span> | </span>
          Deoria
          <span> | </span>
          Deosar
          <span> | </span>
          Deotalab
          <span> | </span>
          Dera Bassi
          <span> | </span>
          Devadurga
          <span> | </span>
          Devarakonda
          <span> | </span>
          Dewas
          <span> | </span>
          DHAKA
          <span> | </span>
          DHAKUAKHANA
          <span> | </span>
          Dhalai
          <span> | </span>
          Dhamnod
          <span> | </span>
          Dhampur
          <span> | </span>
          Dhamtari
          <span> | </span>
          Dhanbad
          <span> | </span>
          Dhandhuka
          <span> | </span>
          Dhanghata
          <span> | </span>
          Dhar
          <span> | </span>
          Dharamkot
          <span> | </span>
          Dharampur
          <span> | </span>
          Dharapuram
          <span> | </span>
          Dharchula
          <span> | </span>
          Dhariyawad
          <span> | </span>
          Dharmapuri-TS
          <span> | </span>
          Dharwad
          <span> | </span>
          Dhaurahara
          <span> | </span>
          Dhemaji
          <span> | </span>
          Dhenkanal
          <span> | </span>
          DHOLI
          <span> | </span>
          Dholka
          <span> | </span>
          Dholpur
          <span> | </span>
          Dhone
          <span> | </span>
          Dhubri
          <span> | </span>
          Dhuri
          <span> | </span>
          Dibai
          <span> | </span>
          DIBRUGARH
          <span> | </span>
          Didihat
          <span> | </span>
          Didwana
          <span> | </span>
          DIGAPAHANDI
          <span> | </span>
          DIGBOI
          <span> | </span>
          Dildar Nagar
          <span> | </span>
          Dimapur
          <span> | </span>
          Dinanagar
          <span> | </span>
          DINARA
          <span> | </span>
          Dindigul
          <span> | </span>
          DINHATA
          <span> | </span>
          Doddaballapura
          <span> | </span>
          Doiwala
          <span> | </span>
          Domariyaganj
          <span> | </span>
          DOOMDOOMA
          <span> | </span>
          Doranala
          <span> | </span>
          Dostpur
          <span> | </span>
          Draksharamam
          <span> | </span>
          Dudhinagar
          <span> | </span>
          Dudu
          <span> | </span>
          Dulchehra
          <span> | </span>
          DULIAJAN
          <span> | </span>
          Dullahpur
          <span> | </span>
          Dumka
          <span> | </span>
          Dumraon
          <span> | </span>
          Dungarpur
          <span> | </span>
          Durg
          <span> | </span>
          Dwarahat
          <span> | </span>
          Dwaraka Tirumala
          <span> | </span>
          East Champaran
          <span> | </span>
          East Garo Hills
          <span> | </span>
          East Godavari District
          <span> | </span>
          East Kameng
          <span> | </span>
          East Khasi Hills
          <span> | </span>
          East Midnapore
          <span> | </span>
          East Siang
          <span> | </span>
          East Sikkim
          <span> | </span>
          East Singhbhum
          <span> | </span>
          East-Godavari-2
          <span> | </span>
          Edappal
          <span> | </span>
          Edavanna
          <span> | </span>
          Eedu
          <span> | </span>
          EKMA
          <span> | </span>
          Eluru
          <span> | </span>
          Eral
          <span> | </span>
          Erode
          <span> | </span>
          Etah
          <span> | </span>
          Etawah
          <span> | </span>
          Ezhupunna
          <span> | </span>
          Faizabad
          <span> | </span>
          Falna
          <span> | </span>
          Faridabad
          <span> | </span>
          Faridkot
          <span> | </span>
          Faridpur
          <span> | </span>
          Farrukhabad
          <span> | </span>
          Fatehabad
          <span> | </span>
          Fatehgarh
          <span> | </span>
          Fatehgarh Sahib District
          <span> | </span>
          Fatehnagar
          <span> | </span>
          Fatehpur
          <span> | </span>
          Fatehpur-RJ
          <span> | </span>
          Fazilka
          <span> | </span>
          Firozabad
          <span> | </span>
          Firozpur
          <span> | </span>
          Gadag
          <span> | </span>
          Gadarwara
          <span> | </span>
          Gadwal
          <span> | </span>
          Gahmar
          <span> | </span>
          Gairsain
          <span> | </span>
          Gajapati
          <span> | </span>
          Gajapatinagaram
          <span> | </span>
          Gajraula
          <span> | </span>
          Galiveedu
          <span> | </span>
          GALLERI
          <span> | </span>
          Ganga Nagar
          <span> | </span>
          Gangapur City
          <span> | </span>
          Gangapur-RJ
          <span> | </span>
          Gangavathi
          <span> | </span>
          Ganj Basoda
          <span> | </span>
          Ganjam
          <span> | </span>
          Ganjam
          <span> | </span>
          Ganjdundwara
          <span> | </span>
          Gannavaram
          <span> | </span>
          Garhshanker
          <span> | </span>
          Garhwa
          <span> | </span>
          Gariaband
          <span> | </span>
          Garividi
          <span> | </span>
          GARJANPUR
          <span> | </span>
          Garkha
          <span> | </span>
          Garoth
          <span> | </span>
          Gauribidanur
          <span> | </span>
          Gautam Buddha Nagar District
          <span> | </span>
          Gaya
          <span> | </span>
          Gaya
          <span> | </span>
          Ghanpur
          <span> | </span>
          Ghansali
          <span> | </span>
          Gharsana
          <span> | </span>
          Ghatampur
          <span> | </span>
          Ghati Billan
          <span> | </span>
          Ghator
          <span> | </span>
          Ghaziabad
          <span> | </span>
          Ghazipur
          <span> | </span>
          Ghosi
          <span> | </span>
          Ghughus
          <span> | </span>
          Ghugri
          <span> | </span>
          Ghumarwin
          <span> | </span>
          Giddarbaha
          <span> | </span>
          Giridh
          <span> | </span>
          Goa
          <span> | </span>
          Goalpara
          <span> | </span>
          Gobichettipalayam
          <span> | </span>
          Godda
          <span> | </span>
          Godhra
          <span> | </span>
          GOGAMUKH
          <span> | </span>
          Gogunda
          <span> | </span>
          Gohana
          <span> | </span>
          Gokak
          <span> | </span>
          Gokavaram
          <span> | </span>
          GOLAGHAT
          <span> | </span>
          Gonda District
          <span> | </span>
          Gondia
          <span> | </span>
          Gonikoppal
          <span> | </span>
          Gooty
          <span> | </span>
          GOPALAPUR
          <span> | </span>
          Gopalganj
          <span> | </span>
          Gopalganj
          <span> | </span>
          GOPALNAGAR
          <span> | </span>
          Gopiganj
          <span> | </span>
          Gorakhpur
          <span> | </span>
          Gorantla
          <span> | </span>
          Gotan
          <span> | </span>
          Gudalur
          <span> | </span>
          Gudivada
          <span> | </span>
          Gudiyatham
          <span> | </span>
          Gudiyattam
          <span> | </span>
          Gudur
          <span> | </span>
          Gudur-TS
          <span> | </span>
          Gulbaraga
          <span> | </span>
          Gulbarga
          <span> | </span>
          GUMIA
          <span> | </span>
          Gumkhal
          <span> | </span>
          Gumla
          <span> | </span>
          Gummudipoondi
          <span> | </span>
          Guna
          <span> | </span>
          Gundlupet
          <span> | </span>
          Guntakal
          <span> | </span>
          Guntur
          <span> | </span>
          Guntur-Rural
          <span> | </span>
          Gurdaspur
          <span> | </span>
          Gurgaon
          <span> | </span>
          Gurmatkal
          <span> | </span>
          Gursahaiganj
          <span> | </span>
          Gurugram Rural
          <span> | </span>
          Guruvayoor
          <span> | </span>
          Guskhara
          <span> | </span>
          Guwahati
          <span> | </span>
          Guwahati Rural
          <span> | </span>
          Gwalior
          <span> | </span>
          Habra
          <span> | </span>
          Hagaribommanahalli
          <span> | </span>
          Haidargarh
          <span> | </span>
          Hailakandi
          <span> | </span>
          HAJIPUR
          <span> | </span>
          Hajipur
          <span> | </span>
          Haldia
          <span> | </span>
          Haldwani
          <span> | </span>
          Halflong
          <span> | </span>
          Haliyal
          <span> | </span>
          Hamirpur
          <span> | </span>
          Hamirpur-UP
          <span> | </span>
          Hanamkonda
          <span> | </span>
          Hangal
          <span> | </span>
          Hansi
          <span> | </span>
          HANSKHALI
          <span> | </span>
          Hanskhali
          <span> | </span>
          Hanumangarh
          <span> | </span>
          Hanur
          <span> | </span>
          Hapur
          <span> | </span>
          Harda
          <span> | </span>
          Hardoi
          <span> | </span>
          Haridwar
          <span> | </span>
          Harihara
          <span> | </span>
          Haripad
          <span> | </span>
          Haripal
          <span> | </span>
          Haripurdhar
          <span> | </span>
          Harpanahalli
          <span> | </span>
          Harur
          <span> | </span>
          Haryana
          <span> | </span>
          HARYANA_3PL
          <span> | </span>
          Hasanpur
          <span> | </span>
          Hasnabad
          <span> | </span>
          Hassan
          <span> | </span>
          Hathras
          <span> | </span>
          Hatta
          <span> | </span>
          Haveri
          <span> | </span>
          Hayathnagar
          <span> | </span>
          Hazaribag
          <span> | </span>
          HELENCHA
          <span> | </span>
          Herbertpur
          <span> | </span>
          HILSA
          <span> | </span>
          Himachal Pradesh
          <span> | </span>
          HIMACHAL PRADESH_3PL
          <span> | </span>
          Himatnagar
          <span> | </span>
          Hindaun
          <span> | </span>
          Hindupur
          <span> | </span>
          HINGALGANJ
          <span> | </span>
          HINJILICUT
          <span> | </span>
          Hiranagar
          <span> | </span>
          Hirekerur
          <span> | </span>
          Hiriyur
          <span> | </span>
          Hisar
          <span> | </span>
          Holenarasipur
          <span> | </span>
          Honnali
          <span> | </span>
          Honnavar
          <span> | </span>
          Hooghly
          <span> | </span>
          Hooghly District
          <span> | </span>
          Hoovina Hadagali
          <span> | </span>
          Hosadurga
          <span> | </span>
          Hosanagar
          <span> | </span>
          Hoshangabad
          <span> | </span>
          Hoshiarpur
          <span> | </span>
          Hospet
          <span> | </span>
          Hosur
          <span> | </span>
          Howrah
          <span> | </span>
          Howrah
          <span> | </span>
          Hubli
          <span> | </span>
          Huliyar
          <span> | </span>
          Humnabad
          <span> | </span>
          Hunsur
          <span> | </span>
          Husnabad
          <span> | </span>
          Huzur Nagar
          <span> | </span>
          Huzurabad
          <span> | </span>
          Hyderabad
          <span> | </span>
          Hyderabad Rural
          <span> | </span>
          Ichchapuram
          <span> | </span>
          Ichoda
          <span> | </span>
          Iddukki
          <span> | </span>
          Ikauna
          <span> | </span>
          ILIPUR
          <span> | </span>
          Ilkal
          <span> | </span>
          IMAMGANJ
          <span> | </span>
          Imphal West
          <span> | </span>
          Indi
          <span> | </span>
          Indore
          <span> | </span>
          Indore Rural
          <span> | </span>
          Irinjalakuda
          <span> | </span>
          Itarsi
          <span> | </span>
          Itava
          <span> | </span>
          Itawa
          <span> | </span>
          Itia Thok
          <span> | </span>
          Jabalpur
          <span> | </span>
          Jadcherla
          <span> | </span>
          Jagaluru
          <span> | </span>
          JAGANNATHPRASAD
          <span> | </span>
          Jagatsinghapur
          <span> | </span>
          Jagatsinghpur
          <span> | </span>
          JAGDISHPUR
          <span> | </span>
          JAGDISHPUR
          <span> | </span>
          Jagdishpur-UP
          <span> | </span>
          Jagraon
          <span> | </span>
          Jagtial
          <span> | </span>
          Jahangirabad
          <span> | </span>
          Jahu
          <span> | </span>
          JAIGAON
          <span> | </span>
          Jainoor
          <span> | </span>
          Jaintia Hills
          <span> | </span>
          Jaipur
          <span> | </span>
          Jaipur Rural
          <span> | </span>
          Jaisalmer
          <span> | </span>
          Jaisinghnagar
          <span> | </span>
          Jaitwara
          <span> | </span>
          Jajapur
          <span> | </span>
          Jajpur
          <span> | </span>
          Jakh
          <span> | </span>
          Jalalabad
          <span> | </span>
          Jalalpur
          <span> | </span>
          Jalalpur-UP
          <span> | </span>
          Jalandhar
          <span> | </span>
          Jalaun
          <span> | </span>
          Jalesar
          <span> | </span>
          Jalore
          <span> | </span>
          JALPAIGURI
          <span> | </span>
          Jamkhandi
          <span> | </span>
          Jammikunta
          <span> | </span>
          JAMMU & KASHMIR_3PL
          <span> | </span>
          Jammu Kashmir
          <span> | </span>
          Jamshedpur
          <span> | </span>
          Jamtara
          <span> | </span>
          Jamui
          <span> | </span>
          Jamuria
          <span> | </span>
          Jangaon
          <span> | </span>
          Jangareddygudem
          <span> | </span>
          Janjgir-champa
          <span> | </span>
          Jannaram
          <span> | </span>
          Jaora
          <span> | </span>
          Jashpur
          <span> | </span>
          Jatara
          <span> | </span>
          Jaunpur
          <span> | </span>
          Jawad
          <span> | </span>
          Jayankondam
          <span> | </span>
          Jehanabad
          <span> | </span>
          Jehanabad
          <span> | </span>
          Jewar
          <span> | </span>
          Jewargi
          <span> | </span>
          Jhabua
          <span> | </span>
          Jhadol
          <span> | </span>
          Jhajjar
          <span> | </span>
          Jhalawar
          <span> | </span>
          JHANJHARPUR
          <span> | </span>
          Jhansi
          <span> | </span>
          Jharsuguda
          <span> | </span>
          Jharsuguda
          <span> | </span>
          Jhunjhunu
          <span> | </span>
          Jhunku
          <span> | </span>
          Jiyanpur
          <span> | </span>
          Jodhpur
          <span> | </span>
          Joginder Nagar
          <span> | </span>
          Jogipet
          <span> | </span>
          JORHAT
          <span> | </span>
          Joshimath
          <span> | </span>
          Jubbal
          <span> | </span>
          Jukhala
          <span> | </span>
          Junnardeo
          <span> | </span>
          Kadaba
          <span> | </span>
          Kadapa
          <span> | </span>
          Kadi
          <span> | </span>
          Kadiri
          <span> | </span>
          KADOBAHAL
          <span> | </span>
          Kadpadi
          <span> | </span>
          Kadur
          <span> | </span>
          Kaghaznagar
          <span> | </span>
          Kaikaluru
          <span> | </span>
          Kaimur (Bhabua)
          <span> | </span>
          Kaithal
          <span> | </span>
          Kakinada
          <span> | </span>
          Kalaburagi
          <span> | </span>
          Kalahandi
          <span> | </span>
          Kalasa
          <span> | </span>
          Kalghatgi
          <span> | </span>
          Kalinga Nagar
          <span> | </span>
          Kallakurichi
          <span> | </span>
          Kallikkad
          <span> | </span>
          Kalluru
          <span> | </span>
          Kalmeshwar
          <span> | </span>
          Kalna
          <span> | </span>
          Kalol
          <span> | </span>
          KalolHP
          <span> | </span>
          Kalpetta
          <span> | </span>
          Kalwakurthy
          <span> | </span>
          Kalyandurg
          <span> | </span>
          KALYANI
          <span> | </span>
          KAMAKHYANAGAR
          <span> | </span>
          Kamareddy District
          <span> | </span>
          Kambadur
          <span> | </span>
          Kamptee
          <span> | </span>
          Kamrup
          <span> | </span>
          Kanakapura
          <span> | </span>
          Kanchipuram
          <span> | </span>
          Kandhamal
          <span> | </span>
          Kandukur
          <span> | </span>
          Kangan
          <span> | </span>
          Kangeyam
          <span> | </span>
          Kangra
          <span> | </span>
          Kanigiri
          <span> | </span>
          Kanjarakatte
          <span> | </span>
          Kanjiramattom
          <span> | </span>
          Kanker
          <span> | </span>
          Kannapuram
          <span> | </span>
          Kannauj
          <span> | </span>
          Kannur
          <span> | </span>
          Kanpur
          <span> | </span>
          Kanthi
          <span> | </span>
          Kapadvanj
          <span> | </span>
          Kapasan
          <span> | </span>
          Kaptanganj
          <span> | </span>
          Kapurthala
          <span> | </span>
          Karaikal
          <span> | </span>
          Karaikudi
          <span> | </span>
          Karauli
          <span> | </span>
          Karbi Anglong
          <span> | </span>
          Karera-MP
          <span> | </span>
          Karim Nagar
          <span> | </span>
          Karimba
          <span> | </span>
          Karimganj
          <span> | </span>
          Karimnagar
          <span> | </span>
          Karkala
          <span> | </span>
          Karnal
          <span> | </span>
          Karsog
          <span> | </span>
          Karukachal
          <span> | </span>
          Karur
          <span> | </span>
          Karwar
          <span> | </span>
          Kasaragod
          <span> | </span>
          Kasganj
          <span> | </span>
          Kashipur
          <span> | </span>
          Katangi
          <span> | </span>
          Kathipudi
          <span> | </span>
          Kathua
          <span> | </span>
          Katihar
          <span> | </span>
          Katni
          <span> | </span>
          Katol
          <span> | </span>
          Kattappana
          <span> | </span>
          Katwa
          <span> | </span>
          Kauriram
          <span> | </span>
          Kavali
          <span> | </span>
          Kawardha
          <span> | </span>
          Kayamkulam
          <span> | </span>
          Kazipet
          <span> | </span>
          Kekri
          <span> | </span>
          Kelwara
          <span> | </span>
          KENDRAPARA
          <span> | </span>
          Kendrapara
          <span> | </span>
          Kendujhar
          <span> | </span>
          Kerakat
          <span> | </span>
          Kerur
          <span> | </span>
          Kesali
          <span> | </span>
          Keshoraipatan
          <span> | </span>
          Keylong
          <span> | </span>
          Khadda
          <span> | </span>
          Khagaria
          <span> | </span>
          Khairabad
          <span> | </span>
          Khajuraho
          <span> | </span>
          KHALARI-JR
          <span> | </span>
          Khalilabad
          <span> | </span>
          Khambhat
          <span> | </span>
          Khammam
          <span> | </span>
          Khanapur
          <span> | </span>
          Khanapur-TS
          <span> | </span>
          Khandela
          <span> | </span>
          Khandwa
          <span> | </span>
          Khanna
          <span> | </span>
          Khanpur
          <span> | </span>
          Kharagpur
          <span> | </span>
          Khargone
          <span> | </span>
          Khatauli
          <span> | </span>
          Khategaon
          <span> | </span>
          Khatima
          <span> | </span>
          Khatu Khurd
          <span> | </span>
          Kheda
          <span> | </span>
          Kheragarh
          <span> | </span>
          Khergam
          <span> | </span>
          Kheri
          <span> | </span>
          Kherwara
          <span> | </span>
          Khimsar
          <span> | </span>
          Khinwara
          <span> | </span>
          KHIZASARAI
          <span> | </span>
          KHODAGANJ
          <span> | </span>
          Khorda
          <span> | </span>
          Khordha
          <span> | </span>
          KHUNTI
          <span> | </span>
          Khurai
          <span> | </span>
          Khutar
          <span> | </span>
          Kilimanoor
          <span> | </span>
          Kinnaur
          <span> | </span>
          Kiphire
          <span> | </span>
          Kishanganj
          <span> | </span>
          Kishangarh
          <span> | </span>
          Kishni
          <span> | </span>
          Kittur
          <span> | </span>
          Kochi
          <span> | </span>
          Kochi Rural
          <span> | </span>
          Kodad
          <span> | </span>
          Kodaikanal
          <span> | </span>
          KODALA
          <span> | </span>
          Koderma
          <span> | </span>
          Kodumudi
          <span> | </span>
          Kodungallur
          <span> | </span>
          Koduru
          <span> | </span>
          Kokrajhar
          <span> | </span>
          kolar
          <span> | </span>
          Kolasib
          <span> | </span>
          Kolayat
          <span> | </span>
          Kolhapur
          <span> | </span>
          Kolhar
          <span> | </span>
          Kolkata
          <span> | </span>
          Kolkata Rural
          <span> | </span>
          Kollam
          <span> | </span>
          Kollapur
          <span> | </span>
          Kollegala
          <span> | </span>
          KONARK
          <span> | </span>
          Konaseema District
          <span> | </span>
          Konch
          <span> | </span>
          Kondapi
          <span> | </span>
          Koothattukulam
          <span> | </span>
          Koppal
          <span> | </span>
          Koraput
          <span> | </span>
          Koratagere
          <span> | </span>
          Koratla
          <span> | </span>
          Korba
          <span> | </span>
          Koriya
          <span> | </span>
          Koruprolu
          <span> | </span>
          Kosgi
          <span> | </span>
          Kota
          <span> | </span>
          Kotagiri
          <span> | </span>
          Kotdwara
          <span> | </span>
          Kothagudem
          <span> | </span>
          Kothapalli
          <span> | </span>
          Kotkapura
          <span> | </span>
          Kotma
          <span> | </span>
          Kotputli
          <span> | </span>
          Kottarakkara
          <span> | </span>
          Kottayam
          <span> | </span>
          Kotturu
          <span> | </span>
          Kotturu-AP
          <span> | </span>
          Kovilpatti
          <span> | </span>
          Kovvur
          <span> | </span>
          Kowthal
          <span> | </span>
          Koyilandy
          <span> | </span>
          Koyyuru
          <span> | </span>
          Kozhenchery
          <span> | </span>
          Kozhikode
          <span> | </span>
          Krishna District
          <span> | </span>
          Krishnagiri
          <span> | </span>
          Krishnarajanagara
          <span> | </span>
          Krishnarajngr
          <span> | </span>
          Krishnarajpet
          <span> | </span>
          KUCHAIKOTE
          <span> | </span>
          Kuchaman City
          <span> | </span>
          KUCHINDA
          <span> | </span>
          Kudair
          <span> | </span>
          Kudligi
          <span> | </span>
          Kukanoor
          <span> | </span>
          Kukshi
          <span> | </span>
          Kumarganj
          <span> | </span>
          Kumbakonam
          <span> | </span>
          Kumily
          <span> | </span>
          Kumta
          <span> | </span>
          Kundapura
          <span> | </span>
          Kundli
          <span> | </span>
          Kunigal
          <span> | </span>
          Kuppam
          <span> | </span>
          Kurnool
          <span> | </span>
          Kurugodu
          <span> | </span>
          Kurukshetra
          <span> | </span>
          Kurupam
          <span> | </span>
          Kushalnagar
          <span> | </span>
          Kushinagar
          <span> | </span>
          Kushtagi
          <span> | </span>
          Kusumanchi
          <span> | </span>
          Kuthumkal
          <span> | </span>
          Kuthuparamba
          <span> | </span>
          Kuttiady
          <span> | </span>
          Kuttikol
          <span> | </span>
          Ladakh
          <span> | </span>
          Ladwa
          <span> | </span>
          Lahar
          <span> | </span>
          Lakheri
          <span> | </span>
          Lakhimpur
          <span> | </span>
          Lakhimpur
          <span> | </span>
          Lakhisarai
          <span> | </span>
          Lakhnadon
          <span> | </span>
          Laksar
          <span> | </span>
          Lal Gopalganj
          <span> | </span>
          Lalitpur
          <span> | </span>
          Lalsot
          <span> | </span>
          Lambhua
          <span> | </span>
          Latehar
          <span> | </span>
          Lavkush Nagar
          <span> | </span>
          Lawngtlai
          <span> | </span>
          Laxmangarh
          <span> | </span>
          Laxmangarh-RJ
          <span> | </span>
          Linga
          <span> | </span>
          Lingasugur
          <span> | </span>
          Lohaghat
          <span> | </span>
          Lohardaga
          <span> | </span>
          Lohit
          <span> | </span>
          Longleng
          <span> | </span>
          Lower Dibang Valley
          <span> | </span>
          Lower Subansiri
          <span> | </span>
          Lucknow
          <span> | </span>
          Lucknow Rural
          <span> | </span>
          Ludhiana
          <span> | </span>
          Ludhiana
          <span> | </span>
          Ludhiana District
          <span> | </span>
          Lunawada
          <span> | </span>
          Lunglei
          <span> | </span>
          Lunkaransar
          <span> | </span>
          Luxettipet
          <span> | </span>
          Macherla
          <span> | </span>
          Machhiwara
          <span> | </span>
          Machilipatnam
          <span> | </span>
          Madakasira
          <span> | </span>
          Madanapalle
          <span> | </span>
          Madanapalli
          <span> | </span>
          Madanpur
          <span> | </span>
          Maddur
          <span> | </span>
          Madgulapally
          <span> | </span>
          Madhepura
          <span> | </span>
          Madhoganj
          <span> | </span>
          Madhubani
          <span> | </span>
          Madhubani
          <span> | </span>
          Madhugiri
          <span> | </span>
          MADHYA PRADESH_3PL
          <span> | </span>
          Madikeri
          <span> | </span>
          Madurai
          <span> | </span>
          Madwas
          <span> | </span>
          Magadi
          <span> | </span>
          Mahabubabad
          <span> | </span>
          Mahabubnagar
          <span> | </span>
          Mahadevpur
          <span> | </span>
          Mahalingpur
          <span> | </span>
          Maharajapuram
          <span> | </span>
          MAHARAJGANJ-BH
          <span> | </span>
          Mahasamund
          <span> | </span>
          Mahe
          <span> | </span>
          Mahendragarh-HR
          <span> | </span>
          Maheshwar
          <span> | </span>
          Mahoba
          <span> | </span>
          Maholi
          <span> | </span>
          Mahrauni
          <span> | </span>
          Mahwa
          <span> | </span>
          Maihar
          <span> | </span>
          Mainpuri
          <span> | </span>
          MAIRWA
          <span> | </span>
          Majhgawa
          <span> | </span>
          MAKHDUMPUR
          <span> | </span>
          Makrana
          <span> | </span>
          Maksudangarh
          <span> | </span>
          Makthal
          <span> | </span>
          Malanjkhand
          <span> | </span>
          Malappuram
          <span> | </span>
          Malavalli
          <span> | </span>
          MALDA
          <span> | </span>
          Malerkotla
          <span> | </span>
          Malhera
          <span> | </span>
          Malihabad
          <span> | </span>
          Malkangiri
          <span> | </span>
          Mallapur
          <span> | </span>
          Malmaliya
          <span> | </span>
          MALMALIYA
          <span> | </span>
          Malout
          <span> | </span>
          Malpura
          <span> | </span>
          Malsisar
          <span> | </span>
          Malur
          <span> | </span>
          Mammit
          <span> | </span>
          Manali
          <span> | </span>
          Manamelkudi
          <span> | </span>
          Mananthavadi
          <span> | </span>
          Manasa
          <span> | </span>
          Manawar
          <span> | </span>
          Mancherial
          <span> | </span>
          Manda
          <span> | </span>
          Mandalgarh
          <span> | </span>
          Mandapeta
          <span> | </span>
          Mandi Dabwali
          <span> | </span>
          Mandideep
          <span> | </span>
          Mandla
          <span> | </span>
          Mandphiya
          <span> | </span>
          Mandsaur
          <span> | </span>
          Mandya
          <span> | </span>
          MANGALDOI
          <span> | </span>
          Mangalore
          <span> | </span>
          Manipal
          <span> | </span>
          Manjeshwar
          <span> | </span>
          Manopad
          <span> | </span>
          Mansa
          <span> | </span>
          Manthani
          <span> | </span>
          Manuguru
          <span> | </span>
          Manvi
          <span> | </span>
          MARHOWARAH
          <span> | </span>
          Mariahu
          <span> | </span>
          Marigaon
          <span> | </span>
          Markapur
          <span> | </span>
          Marthandam
          <span> | </span>
          Martur
          <span> | </span>
          Marwar Junction
          <span> | </span>
          MASAURHI
          <span> | </span>
          Masrakh
          <span> | </span>
          Mathania
          <span> | </span>
          Mathura
          <span> | </span>
          Mau
          <span> | </span>
          Mauranipur
          <span> | </span>
          Mayiladuthurai
          <span> | </span>
          Mayurbhanj
          <span> | </span>
          Mecheda
          <span> | </span>
          Medak District
          <span> | </span>
          Medinipur
          <span> | </span>
          Meerut
          <span> | </span>
          Meerut District
          <span> | </span>
          Meham
          <span> | </span>
          Mehmedabad
          <span> | </span>
          Mehsana
          <span> | </span>
          Melur
          <span> | </span>
          Memari
          <span> | </span>
          Menhdawal
          <span> | </span>
          Merta
          <span> | </span>
          Metpally
          <span> | </span>
          Mettala
          <span> | </span>
          Mettupalayam
          <span> | </span>
          Mettur
          <span> | </span>
          Mhow
          <span> | </span>
          Milak
          <span> | </span>
          MINAKHAN
          <span> | </span>
          MIRGANJ
          <span> | </span>
          Miryalaguda
          <span> | </span>
          Mirzapur
          <span> | </span>
          Miyanganj
          <span> | </span>
          Modasa
          <span> | </span>
          Modinagar District
          <span> | </span>
          Moga
          <span> | </span>
          Mogullapally
          <span> | </span>
          Mohali
          <span> | </span>
          Mohammadabad
          <span> | </span>
          Mohammadi
          <span> | </span>
          MOHAMMADPUR
          <span> | </span>
          MOHANA
          <span> | </span>
          Mokama
          <span> | </span>
          Mokokchung
          <span> | </span>
          Molakalmuru
          <span> | </span>
          Mominpet
          <span> | </span>
          Moodabidri
          <span> | </span>
          Moradabad
          <span> | </span>
          Morena
          <span> | </span>
          Morshi
          <span> | </span>
          Motebeennura
          <span> | </span>
          Mothkur
          <span> | </span>
          Motihari
          <span> | </span>
          Mudarangady
          <span> | </span>
          Muddebihal
          <span> | </span>
          Mudhol
          <span> | </span>
          Mudigere
          <span> | </span>
          Mudigubba
          <span> | </span>
          Mughal Sarai
          <span> | </span>
          Muktsar
          <span> | </span>
          Mulbagal
          <span> | </span>
          Multai
          <span> | </span>
          Mulugu
          <span> | </span>
          Mumbai
          <span> | </span>
          Mumbai Rural
          <span> | </span>
          Mundakayam
          <span> | </span>
          Mundgod
          <span> | </span>
          Mungaoli
          <span> | </span>
          Munger
          <span> | </span>
          Munger
          <span> | </span>
          Mungra Badshahpur
          <span> | </span>
          Munnar
          <span> | </span>
          Munuvalli
          <span> | </span>
          Muradnagar
          <span> | </span>
          Murshidabad
          <span> | </span>
          Muskara
          <span> | </span>
          Mussoorie
          <span> | </span>
          Muthukulathur
          <span> | </span>
          Muvattupuzha
          <span> | </span>
          Muzaffarnagar District
          <span> | </span>
          Muzaffarpur
          <span> | </span>
          Muzaffarpur
          <span> | </span>
          Muzzafarpur
          <span> | </span>
          Mysore
          <span> | </span>
          Mysore Rural
          <span> | </span>
          Nabadwip
          <span> | </span>
          Nabarangapur
          <span> | </span>
          Nabha
          <span> | </span>
          Nadaun
          <span> | </span>
          Nadia
          <span> | </span>
          Nadia
          <span> | </span>
          Nadiad
          <span> | </span>
          Nadoti
          <span> | </span>
          Nagamangala
          <span> | </span>
          Nagaon
          <span> | </span>
          Nagapattinam
          <span> | </span>
          Nagari
          <span> | </span>
          Nagarkurnool
          <span> | </span>
          Nagaur
          <span> | </span>
          Nagda
          <span> | </span>
          Nagercoil
          <span> | </span>
          Nagina
          <span> | </span>
          Nagod
          <span> | </span>
          Nagpur
          <span> | </span>
          Nagpur Rural
          <span> | </span>
          Nahan
          <span> | </span>
          Naharlagun
          <span> | </span>
          Naidupeta
          <span> | </span>
          Naina Devi
          <span> | </span>
          Naini
          <span> | </span>
          Nainital
          <span> | </span>
          Nainwa
          <span> | </span>
          Najibabad
          <span> | </span>
          NAKASHIPARA
          <span> | </span>
          Nakerakal
          <span> | </span>
          Nakodar
          <span> | </span>
          Nalanda
          <span> | </span>
          Nalbari
          <span> | </span>
          Nalgonda
          <span> | </span>
          Nallajerla
          <span> | </span>
          Namakkal
          <span> | </span>
          Nandikotkur
          <span> | </span>
          Nandyal
          <span> | </span>
          Nanjangud
          <span> | </span>
          Nanpara
          <span> | </span>
          Narasannapeta
          <span> | </span>
          Narasaraopet
          <span> | </span>
          NARASINGHPUR
          <span> | </span>
          Narayankhed
          <span> | </span>
          Narayanpet
          <span> | </span>
          NARAYANPUR
          <span> | </span>
          Narikkuni
          <span> | </span>
          Narketpalle
          <span> | </span>
          Narmetta
          <span> | </span>
          Narnaul
          <span> | </span>
          Narsampet
          <span> | </span>
          Narsapur
          <span> | </span>
          Narsapur-TS
          <span> | </span>
          Narsinghgarh
          <span> | </span>
          Narsinghpur
          <span> | </span>
          Narsipatnam
          <span> | </span>
          Nashik
          <span> | </span>
          Nasirabad
          <span> | </span>
          Naugarh
          <span> | </span>
          Nautanwa
          <span> | </span>
          Navalgund
          <span> | </span>
          Navipet
          <span> | </span>
          Navsari
          <span> | </span>
          Nawabganj
          <span> | </span>
          Nawabganj-UP
          <span> | </span>
          Nawada
          <span> | </span>
          Nawada
          <span> | </span>
          Nawalgarh
          <span> | </span>
          Nawanshahr
          <span> | </span>
          Nayagarh
          <span> | </span>
          Nayagarh
          <span> | </span>
          NAZIRA
          <span> | </span>
          NAZIRPUR
          <span> | </span>
          Nedumangad
          <span> | </span>
          Nedumkandam
          <span> | </span>
          Neem ka Thana
          <span> | </span>
          Neemuch
          <span> | </span>
          Nellore
          <span> | </span>
          Nenmara
          <span> | </span>
          Nepanagar
          <span> | </span>
          Nereducharla
          <span> | </span>
          Neyyattinkara
          <span> | </span>
          Nichlaul
          <span> | </span>
          Nighasan
          <span> | </span>
          Nileshwar
          <span> | </span>
          NIMAPARA
          <span> | </span>
          Nimbahera
          <span> | </span>
          Nipani
          <span> | </span>
          Nirmal
          <span> | </span>
          Nizamabad District
          <span> | </span>
          Nizamabad-UP
          <span> | </span>
          Nohar
          <span> | </span>
          Noida Rural
          <span> | </span>
          Noida-Ghaziabad
          <span> | </span>
          Nokha
          <span> | </span>
          North 24 Parganas
          <span> | </span>
          North 24 Parganas
          <span> | </span>
          North Cachar Hills
          <span> | </span>
          North Dinajpur
          <span> | </span>
          NORTH LAKHIMPUR
          <span> | </span>
          North Paravur
          <span> | </span>
          North Sikkim
          <span> | </span>
          North Tripura
          <span> | </span>
          Nuapada
          <span> | </span>
          NULL
          <span> | </span>
          Nuzvid
          <span> | </span>
          Oddanchatram
          <span> | </span>
          Ongole
          <span> | </span>
          Ooty
          <span> | </span>
          Orai
          <span> | </span>
          Ottapidaram
          <span> | </span>
          Pachore
          <span> | </span>
          PadampurRJ
          <span> | </span>
          Paderu
          <span> | </span>
          Padmajiwadi
          <span> | </span>
          Padrauna
          <span> | </span>
          Paithani
          <span> | </span>
          Pakala
          <span> | </span>
          PAKRIBARWAN
          <span> | </span>
          Pakur
          <span> | </span>
          Pakyong
          <span> | </span>
          Palacode
          <span> | </span>
          Palakkad
          <span> | </span>
          Palakollu
          <span> | </span>
          Palakonda
          <span> | </span>
          Palamaner
          <span> | </span>
          Palamau
          <span> | </span>
          Palani
          <span> | </span>
          Palanpur
          <span> | </span>
          Palasa
          <span> | </span>
          Pali Birsinghpur
          <span> | </span>
          Palitana
          <span> | </span>
          Palladam
          <span> | </span>
          Palwal
          <span> | </span>
          Pamarru
          <span> | </span>
          Pamuru
          <span> | </span>
          Panchkula
          <span> | </span>
          Pandhurna
          <span> | </span>
          Pandikkad
          <span> | </span>
          Pandua
          <span> | </span>
          Pangodu
          <span> | </span>
          Panipat
          <span> | </span>
          Panja
          <span> | </span>
          Panna
          <span> | </span>
          Pansemal
          <span> | </span>
          Panvel
          <span> | </span>
          Paonta Sahib
          <span> | </span>
          Paota
          <span> | </span>
          Papum Pare
          <span> | </span>
          Paramakudi
          <span> | </span>
          Parappa
          <span> | </span>
          Parasia
          <span> | </span>
          Pardi
          <span> | </span>
          Parippally
          <span> | </span>
          Parkal
          <span> | </span>
          Parvathipuram
          <span> | </span>
          Parwanoo
          <span> | </span>
          Paschim Bardhaman
          <span> | </span>
          Patan
          <span> | </span>
          Patancheru
          <span> | </span>
          Pathanamthitta
          <span> | </span>
          Pathankot
          <span> | </span>
          Pathapatnam
          <span> | </span>
          Patiala
          <span> | </span>
          Patna
          <span> | </span>
          Patna Rural
          <span> | </span>
          Patran
          <span> | </span>
          Patti
          <span> | </span>
          Patti-UP
          <span> | </span>
          Pattukkottai
          <span> | </span>
          Pauri
          <span> | </span>
          Pavagada
          <span> | </span>
          PAVAPURI
          <span> | </span>
          Pawai
          <span> | </span>
          Pazhayannur
          <span> | </span>
          Pedabayalu
          <span> | </span>
          Pedapadu
          <span> | </span>
          PEDDAPALLI
          <span> | </span>
          Pehowa
          <span> | </span>
          Pench
          <span> | </span>
          Pendra
          <span> | </span>
          Pennadam
          <span> | </span>
          Pennagaram
          <span> | </span>
          Penugonda
          <span> | </span>
          Peralam
          <span> | </span>
          Perambalur
          <span> | </span>
          Perambra
          <span> | </span>
          Perinthalmanna
          <span> | </span>
          Perumbavoor
          <span> | </span>
          Perunali
          <span> | </span>
          Perundurai
          <span> | </span>
          PETERBAR
          <span> | </span>
          Petlad
          <span> | </span>
          Petlawad
          <span> | </span>
          Phagwara
          <span> | </span>
          Phalodi
          <span> | </span>
          Phalsund
          <span> | </span>
          Phek
          <span> | </span>
          Phephna
          <span> | </span>
          Phulera
          <span> | </span>
          PHUSRO
          <span> | </span>
          Pichhore
          <span> | </span>
          Piduguralla
          <span> | </span>
          Pihani
          <span> | </span>
          Pilakhua District
          <span> | </span>
          Pilani
          <span> | </span>
          Pileru
          <span> | </span>
          Pilibanga
          <span> | </span>
          Pilibhit
          <span> | </span>
          Pilkhuwa
          <span> | </span>
          Pindwara
          <span> | </span>
          Piparcity
          <span> | </span>
          Pipariya
          <span> | </span>
          PIPILI
          <span> | </span>
          Piriyapatna
          <span> | </span>
          PIRO
          <span> | </span>
          Pithampur
          <span> | </span>
          Pithoragarh
          <span> | </span>
          PLASSEY
          <span> | </span>
          Podili
          <span> | </span>
          Poinachi
          <span> | </span>
          Pokhran
          <span> | </span>
          Polay Kalan
          <span> | </span>
          Pollachi
          <span> | </span>
          Polur
          <span> | </span>
          Ponnamaravathi
          <span> | </span>
          Pooh
          <span> | </span>
          Poonch
          <span> | </span>
          Poonchh
          <span> | </span>
          Prakasam
          <span> | </span>
          Prakasam District
          <span> | </span>
          Pratapgarh District
          <span> | </span>
          Pratapgarh-RJ
          <span> | </span>
          Pregnapur
          <span> | </span>
          Prithvipur
          <span> | </span>
          Proddatur
          <span> | </span>
          Puducherry
          <span> | </span>
          Pudukkottai
          <span> | </span>
          Pukhrayan
          <span> | </span>
          Pulivendula
          <span> | </span>
          Pulpally
          <span> | </span>
          Pune
          <span> | </span>
          Pune Rural
          <span> | </span>
          Punganur
          <span> | </span>
          Punjab
          <span> | </span>
          PUNJAB_3PL
          <span> | </span>
          Puranpur
          <span> | </span>
          Purba Bardhaman
          <span> | </span>
          Puri
          <span> | </span>
          Puri
          <span> | </span>
          Puruliya
          <span> | </span>
          Pushpavanam
          <span> | </span>
          Puthukkad
          <span> | </span>
          Puttaparthi
          <span> | </span>
          Puttur
          <span> | </span>
          Puttur-AP
          <span> | </span>
          Raebareli District
          <span> | </span>
          RAGHUNATHPUR-BR
          <span> | </span>
          Rahatgarh
          <span> | </span>
          Raibag
          <span> | </span>
          Raichur
          <span> | </span>
          Raigarh
          <span> | </span>
          Raikot
          <span> | </span>
          Raila
          <span> | </span>
          Raipur
          <span> | </span>
          Raipur Karchulion
          <span> | </span>
          Raipur-RJ
          <span> | </span>
          Raipura
          <span> | </span>
          RAIRAKHOL
          <span> | </span>
          Raisen
          <span> | </span>
          Raisinghnagar
          <span> | </span>
          Rajahmundry
          <span> | </span>
          Rajamahendravaram
          <span> | </span>
          Rajampet
          <span> | </span>
          Rajapalayam
          <span> | </span>
          RAJASTHAN_3PL
          <span> | </span>
          Rajesultanpur
          <span> | </span>
          RAJGANJ
          <span> | </span>
          Rajgarh
          <span> | </span>
          Rajgarh-HP
          <span> | </span>
          Rajgarh-MP
          <span> | </span>
          RAJGIR
          <span> | </span>
          Rajkot
          <span> | </span>
          Rajnandgaon
          <span> | </span>
          Rajpipla
          <span> | </span>
          Rajsamand
          <span> | </span>
          Ramagundam
          <span> | </span>
          Ramanagara
          <span> | </span>
          Ramanathapura
          <span> | </span>
          Ramanathapuram
          <span> | </span>
          Ramannapeta
          <span> | </span>
          Ramdurg
          <span> | </span>
          Rameswaram
          <span> | </span>
          Ramganj Mandi
          <span> | </span>
          Ramgarh
          <span> | </span>
          Ramgarh-RJ
          <span> | </span>
          Ramnagar
          <span> | </span>
          Rampachodavaram
          <span> | </span>
          Rampur
          <span> | </span>
          Rampur Naikin
          <span> | </span>
          Rampura Phul
          <span> | </span>
          Ramtek
          <span> | </span>
          Ranchha
          <span> | </span>
          Ranchi
          <span> | </span>
          Ranebennur
          <span> | </span>
          RANGPO
          <span> | </span>
          Ranihati
          <span> | </span>
          Ranikhet
          <span> | </span>
          Ranipet
          <span> | </span>
          Raniwara
          <span> | </span>
          Ranni
          <span> | </span>
          Ras
          <span> | </span>
          Rasipuram
          <span> | </span>
          Rasulabad
          <span> | </span>
          Ratangarh
          <span> | </span>
          Ratangarh-MP
          <span> | </span>
          Ratanpura
          <span> | </span>
          Rath
          <span> | </span>
          Ratia
          <span> | </span>
          Ratlam
          <span> | </span>
          Rawatbhata
          <span> | </span>
          Rawatsar
          <span> | </span>
          Rayachoti
          <span> | </span>
          Rayadurgam
          <span> | </span>
          Rayagada
          <span> | </span>
          Rayaparthi
          <span> | </span>
          Razole
          <span> | </span>
          Reckong Peo
          <span> | </span>
          Reengus
          <span> | </span>
          Rehli
          <span> | </span>
          Renigunta
          <span> | </span>
          Renukoot
          <span> | </span>
          Renwal
          <span> | </span>
          Reodar
          <span> | </span>
          Repalle
          <span> | </span>
          Rewa
          <span> | </span>
          Rewari
          <span> | </span>
          Ri Bhoi
          <span> | </span>
          Rishikesh
          <span> | </span>
          Robertsganj
          <span> | </span>
          Robertsonpet
          <span> | </span>
          Rohtak
          <span> | </span>
          Rohtas
          <span> | </span>
          Rona
          <span> | </span>
          Roorkee
          <span> | </span>
          Rourkela
          <span> | </span>
          RS Pura
          <span> | </span>
          Rudauli
          <span> | </span>
          Rudhauli
          <span> | </span>
          Rudrangi
          <span> | </span>
          Rudraprayag
          <span> | </span>
          Rudrapur
          <span> | </span>
          RUNNISAIDPUR
          <span> | </span>
          RUNNISAIDPUR
          <span> | </span>
          Rupnagar
          <span> | </span>
          S Kota
          <span> | </span>
          Sabalgarh
          <span> | </span>
          Sagar
          <span> | </span>
          Sagara
          <span> | </span>
          Sagwara
          <span> | </span>
          Saharanpur District
          <span> | </span>
          Saharsa
          <span> | </span>
          Sahaswan
          <span> | </span>
          Sahibganj
          <span> | </span>
          Saidabad
          <span> | </span>
          Saiha
          <span> | </span>
          Sakleshpur
          <span> | </span>
          Salcete
          <span> | </span>
          Salem
          <span> | </span>
          Salempur
          <span> | </span>
          SALIPUR
          <span> | </span>
          Salumbar
          <span> | </span>
          Salur
          <span> | </span>
          Samarlakota
          <span> | </span>
          Samastipur
          <span> | </span>
          Sambalpur
          <span> | </span>
          Sambalpur
          <span> | </span>
          Sambhal District
          <span> | </span>
          Sanawad
          <span> | </span>
          Sanchore
          <span> | </span>
          Sandur
          <span> | </span>
          Sangareddy
          <span> | </span>
          Sangareddy District
          <span> | </span>
          Sangaria
          <span> | </span>
          Sangrur
          <span> | </span>
          Sankaramangalam
          <span> | </span>
          Sankarankovil
          <span> | </span>
          Sankarapuram
          <span> | </span>
          Sankari
          <span> | </span>
          Santipur
          <span> | </span>
          Saoner
          <span> | </span>
          Sarada
          <span> | </span>
          SARAIYA
          <span> | </span>
          Saran
          <span> | </span>
          Saran
          <span> | </span>
          Sardarshahr
          <span> | </span>
          Sarni
          <span> | </span>
          Sasaram
          <span> | </span>
          Sathupally
          <span> | </span>
          Sathyamangalam
          <span> | </span>
          Satna
          <span> | </span>
          Sattur
          <span> | </span>
          Saundatti
          <span> | </span>
          Sausar
          <span> | </span>
          Savadatti
          <span> | </span>
          Sawai Madhopur
          <span> | </span>
          Sedam
          <span> | </span>
          Seetharampram
          <span> | </span>
          Sehore
          <span> | </span>
          Semariya
          <span> | </span>
          Sendhwa
          <span> | </span>
          Seoni
          <span> | </span>
          Seraikela-kharsawan
          <span> | </span>
          Serchhip
          <span> | </span>
          Sewarhi
          <span> | </span>
          Shadnagar
          <span> | </span>
          Shahabad Markanda
          <span> | </span>
          Shahabad-UP
          <span> | </span>
          Shahapur
          <span> | </span>
          Shahdol
          <span> | </span>
          Shaheed Bhagat Singh Nagar
          <span> | </span>
          Shahganj
          <span> | </span>
          Shahgarh
          <span> | </span>
          Shahjahanpur
          <span> | </span>
          Shahpura
          <span> | </span>
          ShahpuraMP
          <span> | </span>
          Shajapur
          <span> | </span>
          Shambhu
          <span> | </span>
          Shamli
          <span> | </span>
          Shanivarasanthe
          <span> | </span>
          Sheikhpura
          <span> | </span>
          SHEOHAR
          <span> | </span>
          SHEONAR
          <span> | </span>
          Sheopur
          <span> | </span>
          Shiggaon
          <span> | </span>
          Shikaripur
          <span> | </span>
          Shikohabad
          <span> | </span>
          SHILLONG
          <span> | </span>
          Shilong
          <span> | </span>
          Shimla
          <span> | </span>
          Shimoga
          <span> | </span>
          Shiralakoppa
          <span> | </span>
          Shivpuri
          <span> | </span>
          Sholinghur
          <span> | </span>
          Shoranur
          <span> | </span>
          Shorapur
          <span> | </span>
          SHRAVASTI
          <span> | </span>
          Shri Dungargarh
          <span> | </span>
          Shrimadhopur
          <span> | </span>
          Shujalpur
          <span> | </span>
          Sibsagar
          <span> | </span>
          Siddapur
          <span> | </span>
          Siddhpur
          <span> | </span>
          Siddipet District
          <span> | </span>
          Sidhauli
          <span> | </span>
          Sidhi
          <span> | </span>
          Sidlaghatta
          <span> | </span>
          Sihor
          <span> | </span>
          Sihora
          <span> | </span>
          Sikandrabad
          <span> | </span>
          Sikar
          <span> | </span>
          Sikriganj
          <span> | </span>
          SILCHAR
          <span> | </span>
          Siliguri
          <span> | </span>
          Silvassa
          <span> | </span>
          Silwani
          <span> | </span>
          Simalwara
          <span> | </span>
          Simdega
          <span> | </span>
          Sindagi
          <span> | </span>
          Sindhanur
          <span> | </span>
          Sindudurg
          <span> | </span>
          Singarayakonda
          <span> | </span>
          SINGHIA
          <span> | </span>
          Singrauli
          <span> | </span>
          Sira
          <span> | </span>
          Sirathu
          <span> | </span>
          Sircilla District
          <span> | </span>
          SIRDALA
          <span> | </span>
          Sirikonda
          <span> | </span>
          Sirkazhi
          <span> | </span>
          Sirohi
          <span> | </span>
          Sirsa
          <span> | </span>
          Sirsi
          <span> | </span>
          Siruguppa
          <span> | </span>
          Sirvella
          <span> | </span>
          Sitamarhi
          <span> | </span>
          Sitamarhi
          <span> | </span>
          Sitapur
          <span> | </span>
          Sitarganj
          <span> | </span>
          Sivaganga
          <span> | </span>
          Sivakasi
          <span> | </span>
          SIVASAGAR
          <span> | </span>
          Siwan
          <span> | </span>
          Siwan
          <span> | </span>
          Siwani
          <span> | </span>
          Siyana
          <span> | </span>
          Sleemnabad
          <span> | </span>
          Sohagi
          <span> | </span>
          Sojat
          <span> | </span>
          Someshwar
          <span> | </span>
          Sompeta
          <span> | </span>
          Sonapur
          <span> | </span>
          SONBARSA
          <span> | </span>
          Sonepur
          <span> | </span>
          Songadh
          <span> | </span>
          Sonipat
          <span> | </span>
          Sonitpur
          <span> | </span>
          Soraba
          <span> | </span>
          Soraon
          <span> | </span>
          Soro
          <span> | </span>
          South 24 Parganas
          <span> | </span>
          South 24 Parganas District
          <span> | </span>
          South Dinajpur
          <span> | </span>
          South Garo Hills
          <span> | </span>
          South Sikkim
          <span> | </span>
          South Tripura
          <span> | </span>
          Sri City
          <span> | </span>
          Sri Hargobindpur
          <span> | </span>
          Srikakulam Disctrict
          <span> | </span>
          Srikalahasti
          <span> | </span>
          Srinagar
          <span> | </span>
          Srinagar-UK
          <span> | </span>
          Sringeri
          <span> | </span>
          Srinivaspur
          <span> | </span>
          Sriperumbudur
          <span> | </span>
          Srirangapatna
          <span> | </span>
          Srisailam
          <span> | </span>
          Srivijaynagar
          <span> | </span>
          Sujangarh
          <span> | </span>
          Sullia
          <span> | </span>
          Sullurupeta
          <span> | </span>
          Sultan Bathery
          <span> | </span>
          Sultana
          <span> | </span>
          SULTANGANJ
          <span> | </span>
          Sultanpur District
          <span> | </span>
          Sultanpur Lodhi
          <span> | </span>
          Sumerpur
          <span> | </span>
          Sunam
          <span> | </span>
          Sundar Nagar
          <span> | </span>
          Sundergarh
          <span> | </span>
          Sundla
          <span> | </span>
          Supaul
          <span> | </span>
          SURAJGARHA
          <span> | </span>
          Surajpur jhikla
          <span> | </span>
          Surat
          <span> | </span>
          Surat Rural
          <span> | </span>
          Suratgarh
          <span> | </span>
          Surathkal
          <span> | </span>
          Surguja
          <span> | </span>
          Suryapet District
          <span> | </span>
          SWARUPNAGAR
          <span> | </span>
          Tadepalligudem
          <span> | </span>
          Tadipatri
          <span> | </span>
          Tadoor
          <span> | </span>
          Tadvai
          <span> | </span>
          Taherpur
          <span> | </span>
          Tahliwal
          <span> | </span>
          Talbahat
          <span> | </span>
          Talikoti
          <span> | </span>
          Tamluk
          <span> | </span>
          Tanakpur
          <span> | </span>
          Tanda
          <span> | </span>
          Tandur-TL
          <span> | </span>
          Tanuku
          <span> | </span>
          Tarakeswar
          <span> | </span>
          Tarana
          <span> | </span>
          Taranagar
          <span> | </span>
          Tarn Taran Sahib
          <span> | </span>
          Tarsikka
          <span> | </span>
          Tawang
          <span> | </span>
          Tehri
          <span> | </span>
          Tekkali
          <span> | </span>
          Tenali
          <span> | </span>
          Tendukheda
          <span> | </span>
          Tenkasi
          <span> | </span>
          Tezpur
          <span> | </span>
          Thachanattukara
          <span> | </span>
          Thakurnagar
          <span> | </span>
          Thalassery
          <span> | </span>
          Thalavadi
          <span> | </span>
          Thamarassery
          <span> | </span>
          Thanesar
          <span> | </span>
          Thanjavur
          <span> | </span>
          Tharali
          <span> | </span>
          Theni
          <span> | </span>
          Theog
          <span> | </span>
          Thikri
          <span> | </span>
          Thirthahalli
          <span> | </span>
          Thirumalagiri
          <span> | </span>
          Thiruthuraipoondi
          <span> | </span>
          Thiruttani
          <span> | </span>
          Thiruvadanai
          <span> | </span>
          Thiruvananthapuram
          <span> | </span>
          Thiruvarur
          <span> | </span>
          Thisayanvilai
          <span> | </span>
          Thodupuzha
          <span> | </span>
          Thoubal
          <span> | </span>
          Thrissur
          <span> | </span>
          Thuckalay
          <span> | </span>
          Thuraiyur
          <span> | </span>
          Tijara
          <span> | </span>
          Tikamgarh
          <span> | </span>
          Tindivanam
          <span> | </span>
          TINSUKIA
          <span> | </span>
          Tinsukia
          <span> | </span>
          Tiptur
          <span> | </span>
          Tirap
          <span> | </span>
          Tirora
          <span> | </span>
          Tiruchendur
          <span> | </span>
          Tiruchengode
          <span> | </span>
          Tiruchi
          <span> | </span>
          Tirunelveli
          <span> | </span>
          Tirupati
          <span> | </span>
          Tirupattur
          <span> | </span>
          Tiruppur
          <span> | </span>
          Tirur
          <span> | </span>
          Tiruvalla
          <span> | </span>
          Tiruvallur District
          <span> | </span>
          Tiruvannamalai
          <span> | </span>
          Tirwanganj
          <span> | </span>
          Tiryani
          <span> | </span>
          Tonk
          <span> | </span>
          Tribeni
          <span> | </span>
          Trichy
          <span> | </span>
          Tripura
          <span> | </span>
          Tuensang
          <span> | </span>
          Tumakuru
          <span> | </span>
          Tundla
          <span> | </span>
          Tungaturthi
          <span> | </span>
          Tuni
          <span> | </span>
          Turuvukere
          <span> | </span>
          Tuticorin
          <span> | </span>
          Udaipura
          <span> | </span>
          Udaipurwati
          <span> | </span>
          Udayagiri
          <span> | </span>
          Udgir
          <span> | </span>
          Udham-Singh-Nagar
          <span> | </span>
          Udhampur
          <span> | </span>
          Udumalaipettai
          <span> | </span>
          Ugar
          <span> | </span>
          Ujjain
          <span> | </span>
          Ukhra
          <span> | </span>
          Ullal
          <span> | </span>
          ULUBERIA
          <span> | </span>
          Umaria
          <span> | </span>
          Umreth
          <span> | </span>
          Una-HP
          <span> | </span>
          Unjha
          <span> | </span>
          UNNAO
          <span> | </span>
          Upper Siang
          <span> | </span>
          Upper Subansiri
          <span> | </span>
          Uravakonda
          <span> | </span>
          Usilampatti
          <span> | </span>
          Uthangarai
          <span> | </span>
          Utnoor
          <span> | </span>
          UTTAR PRADESH_3PL
          <span> | </span>
          UTTARAKHAND_3PL
          <span> | </span>
          Uttarkashi
          <span> | </span>
          Vadakara
          <span> | </span>
          Vadipatti
          <span> | </span>
          Vadodara
          <span> | </span>
          Vadodara Rural
          <span> | </span>
          Vaidpura
          <span> | </span>
          Vaishali
          <span> | </span>
          Valanchery
          <span> | </span>
          Vallioor
          <span> | </span>
          Valsad
          <span> | </span>
          Vandavasi
          <span> | </span>
          Vaniyambadi
          <span> | </span>
          Vapi
          <span> | </span>
          Varanasi
          <span> | </span>
          Veenavanka
          <span> | </span>
          Velgodu
          <span> | </span>
          Vellakovil
          <span> | </span>
          Vellore
          <span> | </span>
          Velur
          <span> | </span>
          Vempalli
          <span> | </span>
          Venjaramoodu
          <span> | </span>
          Venkatagirikota
          <span> | </span>
          Venkatgiri
          <span> | </span>
          Vidisha
          <span> | </span>
          Vidyanagar
          <span> | </span>
          Vijapur
          <span> | </span>
          Vijayapura
          <span> | </span>
          Vijayawada-Guntur
          <span> | </span>
          Vijayraghavgarh
          <span> | </span>
          Vikarabad
          <span> | </span>
          Vilathikulam
          <span> | </span>
          Viluppuram
          <span> | </span>
          Vinukonda
          <span> | </span>
          Virajpet
          <span> | </span>
          Viratnagar
          <span> | </span>
          Virudhachalam
          <span> | </span>
          Virudhunagar
          <span> | </span>
          Visakhapatnam
          <span> | </span>
          Visakhapatnam District
          <span> | </span>
          Visnagar
          <span> | </span>
          Vissannapetaa
          <span> | </span>
          Vitla
          <span> | </span>
          Vizag Rural
          <span> | </span>
          Vizianagaram
          <span> | </span>
          Vizianagaram Disctrict
          <span> | </span>
          Vuyyuru
          <span> | </span>
          Vyara
          <span> | </span>
          Wadala
          <span> | </span>
          Wanaparthy
          <span> | </span>
          Wani
          <span> | </span>
          Warangal
          <span> | </span>
          Waraseoni
          <span> | </span>
          Wardha
          <span> | </span>
          Warora
          <span> | </span>
          Warud
          <span> | </span>
          WAZIRGANJ
          <span> | </span>
          Weir
          <span> | </span>
          West Champaran
          <span> | </span>
          West Garo Hills
          <span> | </span>
          West Godavari District
          <span> | </span>
          West Kameng
          <span> | </span>
          West Khasi Hills
          <span> | </span>
          West Midnapore
          <span> | </span>
          West Siang
          <span> | </span>
          West Sikkim
          <span> | </span>
          West Singhbhum
          <span> | </span>
          West Tripura
          <span> | </span>
          West-Godavari
          <span> | </span>
          Wyra
          <span> | </span>
          Yadgir
          <span> | </span>
          Yamuna Nagar
          <span> | </span>
          Yanam District
          <span> | </span>
          Yaragatti
          <span> | </span>
          Yavatmal
          <span> | </span>
          Yelburga
          <span> | </span>
          Yellamanchili
          <span> | </span>
          Yellandu
          <span> | </span>
          Yellapur
          <span> | </span>
          Yellare
          <span> | </span>
          Yellareddipet
          <span> | </span>
          Yellareddy
          <span> | </span>
          Yemmiganur
          <span> | </span>
          Yerragonda Palem
          <span> | </span>
          Yerravaram
          <span> | </span>
          Zahirabad
          <span> | </span>
          Zira
          <span> | </span>
          Zirakpur
          <span> | </span>
          Zunhebotto

        </p>
      </div>
      <hr className="dash" />
      <div className="level-3">
       <div className="pop-catg">
        <h6>Popular Categories</h6>
        <div>
        <ul>
          <Link><li>Sunflower Oils</li></Link>
          <Link><li>Milk</li></Link>
          <Link><li>Organic F&V</li></Link>
          <Link><li>Floor Cleaners</li></Link>
          <Link><li>Frozen Veg Food</li></Link>
        </ul>
        <ul>
          <Link><li>Wheat Atta</li></Link>
          <Link><li>Health Drinks</li></Link>
          <Link><li>Namkeen</li></Link>
          <Link><li>Other Juices</li></Link>
          <Link><li>Diapers & Wipes</li></Link>
        </ul>
        <ul>
          <Link><li>Ghee</li></Link>
          <Link><li>Flakes</li></Link>
          <Link><li>Eggs</li></Link>
          <Link><li>Leafy Vegetables</li></Link>
        </ul>
        </div>
       </div>
       <div className="pop-catg">
       <h6>Popular brand</h6>
       <div>
       <ul>
          <Link><li>Amul</li></Link>
          <Link><li>RED BULL</li></Link>
          <Link><li>Yummiez</li></Link>
          <Link><li>Britannia</li></Link>
          <Link><li>Haldiram's</li></Link>
          <Link><li>Patanjali</li></Link>
          <Link><li>Cadbury Dairy Milk</li></Link>
        </ul>
        <ul>
          <Link><li>Nescafe</li></Link>
          <Link><li>elite cake</li></Link>
          <Link><li>Yera</li></Link>
          <Link><li>Wow! Momo</li></Link>
          <Link><li>Ferrero</li></Link>
          <Link><li>McCain</li></Link>
          <Link><li>Pedigree</li></Link>
        </ul>
        <ul>
          <Link><li>MTR</li></Link>
          <Link><li>Pediasure</li></Link>
          <Link><li>Yakult</li></Link>
          <Link><li>Fortune</li></Link>
          <Link><li>Lay's</li></Link>
          <Link><li>kwality walls</li></Link>
        </ul>
       </div>
       </div>
      </div>
      <p className="last-line">Copyright © 2023-2025 Supermarket Grocery Supplies Pvt Ltd - Himanshu Prasad</p>
    </footer>
  );
};

export default Footer;

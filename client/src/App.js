import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import PlasmaDonor from './pages/PlasmaDonor.js';
import HospitalBed from './pages/HospitalBed.js';
import OxygenSupplier from './pages/OxygenSupplier.js';
import Ambulances from './pages/Ambulances.js';
import Doctors from './pages/Doctors.js';
import Medicines from './pages/Medicines.js';
import DonatePlasma from './pages/DonatePlasma.js';
import RegHospitalBed from './pages/RegHospitalBed.js';
import RegOxygenSupply from './pages/RegOxygenSupply.js';
import RegAmbulance from './pages/RegAmbulance.js';
import RegDoctor from './pages/RegDoctor.js';
import RegMedicine from './pages/RegMedicine.js';



const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/plasmadonor" element={ <PlasmaDonor />} /> 
          <Route exact path="/hospitalbed" element={ <HospitalBed />} />  
          <Route exact path="/osupplier" element={ <OxygenSupplier />} />  
          <Route exact path="/ambulances" element={ <Ambulances />} />  
          <Route exact path="/doctors" element={ <Doctors />} />
          <Route exact path="/medicines" element={ <Medicines />} />
          <Route exact path="/donateplasma" element={ <DonatePlasma />} />
          <Route exact path="/reghospitalbed" element={ <RegHospitalBed />} />
          <Route exact path="/regoxygensuppliers" element={ <RegOxygenSupply />} />
          <Route exact path="/regambulances" element={ <RegAmbulance />} />
          <Route exact path="/regdoctors" element={ <RegDoctor />} />
          <Route exact path="/regmedicines" element={ <RegMedicine />} />
        </Routes>   
      </Router>
    </div>
  );
}

export default App;
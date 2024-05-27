import React from 'react'
import './Index.css'
import profile from "../Assets/img/rian.png"
import { Link } from 'react-router-dom'
const Umkmprofile = () => {
  return (
    <>
      	<div className="umkm-profil">
<div className="umkm-profil-child">
</div>
<div className="profilkiri">
<b className="nama-usaha">Nama Usaha</b>
<div className="email-wrapper">
<b className="email2">Email</b>
</div>
<div className="no-hp-wrapper">
<b className="email2">No HP</b>
</div>
<div className="form-verifikasi">
<input className="form-verifikasi-child" id='inputnama' placeholder='Rumah Makan Ale-Alenta' >
</input>
<div className="bika-abon-rianumkm">Bika abon rian</div>
</div>
<div className="form-new-pass-verif">
<input className="form-verifikasi-child" id='inputemail' placeholder='ex:ranisihombing@gmail.com'>
</input>
<a className="galleofrancogmailcom" target="" required></a>
</div>
<div className="form-enter-new-pass-verif">
<input className="form-verifikasi-child" id='inputnomor' placeholder='ex:082277110353'>
</input>
</div>
</div>
<div className="profilekanan">
<b className="tempat-usaha">Tempat Usaha</b>
<div className="alamat-usaha-wrapper">
<b className="alamat">Alamat usaha</b>
</div>
<div className="form-verifikasi1">
<input className="form-verifikasi-child" id='inputtempat' placeholder='ex:kabupaten Humbang Hasundutan'>
</input>
</div>
<div className="form-new-pass-verif1">
<input className="form-new-pass-verif-item" placeholder='ex:Jalan Sekolah '>
</input>
</div>
<div className="unggah-child" id="rectangle">
</div>
<Link to='/Upload' className="unggah-produk-umkm">Unggah produk</Link>
<div className="dashboard-item" id="rectangle1">
</div>
<Link to='/Dashboard' className="dashboard">Dashboard</Link>
</div>
<b className="profiljudul">Profil</b>

<div className="umkm-hapus" id="rectangle">
</div>
<div className="umkm-simpan" id="rectangle1">
</div>
<div className="simpan">Simpan</div>
<div className="keluar">Keluar</div>
<img className="imageumkm" alt="" src={profile}/>
</div> 
    </>
  )
}

export default Umkmprofile

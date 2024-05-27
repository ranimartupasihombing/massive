import React from 'react'
import pic from '../Assets/img/ProfilPic.jpg'

const ProfilUser = () => {
  return (
    <>
  	 <img className='img-user' src={pic} alt="pic"/>
    <div className='Profil-user'>Profil</div>
    <div className='Favbtn-user'>
      <button name='submit-user'>Favorit</button>
    </div>
    
    <div className='Form-user'>
        <div className='Nama-user'>Nama</div>
        <div className='Email-user'>
        <span>Email</span>
        </div>
        <div className='Nohp-user'>
        <span className='spannomor'>No HP</span>
        </div>
        <div className='Input1-user'>
        <div className='Inputbg1-user'></div>
        <input type='text-user' placeholder='ex:Galleo Franco Malik'></input>
        </div>
        <div className='Input2-user'>
        <div className='Inputbg2-user'></div>
        <input type='email' placeholder='ex:Galleofranco@gmail.com'></input>
        </div>
        <div className='Input3-user'>
        <div className='Inputbg3-user'></div>
        <input type='number' placeholder='ex:08xxxxxxxx'>
        </input>
        </div>
    </div>

    <div className='Form2-user'>
        <div className='Tempat-user'>Tempat Lahir</div>
        <div className='Tanggal-user'>
            <span>Tanggal Lahir</span>
        </div>
        <input name='tempat-user' type='text' placeholder='ex:Yogyakarta'></input>
        <input name='tanggal-user' type='text' placeholder='ex:08 Januari 1995'></input>
        <div className='Jenis-user'>
          <span>Jenis Kelamin</span>
        </div>
        <input name='laki-user' type="radio" id='laki'/>
        <div className='Laki-user'>
        <label name='laki-user' htmlFor="laki">Laki-Laki</label>
        </div>
        <input name='perempuan-user' type="radio" id='perempuan' />
        <div className='Perempuan-user'>
        <label name='perempuan-user' htmlFor="perempuan">Perempuan</label>
        </div>
    </div>

    <button name='keluar-user'>Keluar</button>
    <button name='simpan-user'>Simpan</button>
    </>
  )
}

export default ProfilUser


import './App.css'
import avatar from './assets/images/image-victor.jpg'

function App() {

  return (
    <div id='maindiv'>
      <div id='mycard'>
          <div id='topdiv'>
            <img id='avatar'  src={avatar}/>
          </div>
          <div id='infodiv'>
            <label id='name'>Victor Crist</label>
            <label id='age'>26</label>
          </div>
          <label id='country'>London</label>
          <div id='btndiv'>
            <div className='commondiv'>
              <label className='number'>80K</label>
              <label className='category'>Followers</label>
            </div>
            <div className='commondiv'>
              <label className='number'>803K</label>
              <label className='category'>Likes</label>
            </div>
            <div className='commondiv'>
              <label className='number'>1.4K</label>
              <label className='category'>Photos</label>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App

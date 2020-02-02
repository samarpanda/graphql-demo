import React, { useState } from 'react'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
// import Loader from '../components/Loader'

export default function Pets() {

  const [modal, setModal] = useState(false)

  const onSubmit = input => {
    setModal(false)
  }

  if(modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>
          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>New Pet</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <PetsList />
        </div>
      </section>
    </div>
  )
}

import './Css/PocketSection.css';
import { FaCog } from 'react-icons/fa';
import { useState } from 'react';
import { usePockets } from '../Hooks/usePockets';
import CreatePocketModal from './Modals/CreatePocketModal';
import EditPocketModal from './Modals/EditPocketModal';
import { useNavigationHelpers } from '../Utils/navigation';

function PocketSection() {
  const {
    pockets,
    selectedPocket,
    setSelectedPocket,
    createPocket,
    editPocket,
    deletePocket
  } = usePockets();

  const { handlePocketPage } = useNavigationHelpers();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newPocket, setNewPocket] = useState({ name: '', description: '', balance: 0 });

  const handleCreate = (e) => {
    e.preventDefault();
    createPocket(newPocket, () => {
      setShowCreateModal(false);
      setNewPocket({ name: '', description: '', balance: 0 });
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editPocket(selectedPocket, () => setShowModal(false));
  };

  const handleDelete = () => {
    deletePocket(selectedPocket.id, () => setShowModal(false));
  };

  return (
    <section className='PocketsContainer'>
      <div className='Pocket_textContainer'>
        <h2>
          <span className="tes">Tes</span>
          <span className="tesmoney">Money</span>
          <span className="pockets"> | Pockets</span>
        </h2>
        <button onClick={() => setShowCreateModal(true)}>Crear Pocket</button>
      </div>

      {pockets.map((pocket) => (
        <div key={pocket.id} className='Pocket_Container' onClick={() => handlePocketPage(pocket)}>
          <h1>{pocket.name}</h1>
          <figure>
            <FaCog
              size={24}
              className='figure_edit'
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPocket(pocket);
                setShowModal(true);
              }}
            />
          </figure>
        </div>
      ))}

      {showCreateModal && (
        <CreatePocketModal
          newPocket={newPocket}
          setNewPocket={setNewPocket}
          handleCreate={handleCreate}
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {showModal && selectedPocket && (
        <EditPocketModal
          selectedPocket={selectedPocket}
          setSelectedPocket={setSelectedPocket}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}

export default PocketSection;

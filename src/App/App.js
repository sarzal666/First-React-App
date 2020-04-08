import React from 'react';
import styles from './app.module.scss';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';
import AppContext from '../context';

  const initialItems = [
    {
      title: 'Jan Matejko',
      description: 'Jan Alojzy Matejko – polski malarz, twórca obrazów historycznych i batalistycznych, historiozof. Był autorem ponad trzystu obrazów olejnych oraz kilkuset rysunków i szkiców. Jeden z najwybitniejszych polskich malarzy w historii.',
      key: `${Math.ceil(Math.random() * 100)}`,
  },
    {
      title: 'Algorytmika',
      description: 'Algorytmika, teoria algorytmów – nauka o algorytmach. Jest działem informatyki, cybernetyki, a także, dla większości nauk matematyczno-przyrodniczych, ekonomii i techniki. Algorytmika zajmuje się badaniem algorytmów. Jej częścią jest natomiast algorytmizacja, czyli proces budowy konkretnego algorytmu.',
      key: `${Math.ceil(Math.random() * 100)}`,
    },
    {
      title: 'Home Office',
      description: 'If you use your home for business, you may be able to deduct expenses for the business use of your home. If you qualify, you can claim the deduction whether you rent or own your home. You may use either the simplified method or the regular method to claim your deduction. Here are six tips that you should know about the home office deduction',
      key: `${Math.ceil(Math.random() * 100)}`,
    },
  ];
class App extends React.Component {
  state = {
    Items: [...initialItems],
    Modal: false,
    OpenNote: false,
    note: null,

  };

  OpenModalFn = () => {
    this.setState({
      Modal:true,
    })
  }

  CloseModalFn = () => {
    this.setState({
      Modal:false,
    })
  }

  AddItem = (e,item) => {
    e.preventDefault();
    this.setState(prev  => ({
      Items: [item, ...prev.Items]
    }))
    this.CloseModalFn(e);
  }

  DisplayNote = note => {
    this.setState({
      OpenNote: true,
      note
    })
  }

  HideNote = () => {
    this.setState({
      OpenNote: false,
    })
  }

  SaveNote = (description, key) => {
      let ItemsArray = this.state.Items;
      this.state.Items.find((el, i) => {
        if(el.key === key) {
          ItemsArray[i].description = description;
          return ItemsArray;
        };
      });
      this.setState({
        Items: [...ItemsArray],
      })
      console.log(this.state.Items);
      this.HideNote();
  }



  render() {

  const contextElements = {
    ...this.state,
    OpenModal: this.OpenModalFn,
    AddItem: this.AddItem,
    DisplayNote: this.DisplayNote,
    HideNote: this.HideNote,
    SaveNote: this.SaveNote,
  }
    return(
        <div className={styles.App}>
          <AppContext.Provider value={contextElements}>
            <Header openModal={this.OpenModalFn}></Header>
            <Body></Body>
            <Footer></Footer>
            {contextElements.Modal && <Modal></Modal>}
          </AppContext.Provider>
        </div>
    )
  }
}

export default App;

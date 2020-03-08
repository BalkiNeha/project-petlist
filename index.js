import React, {Component} from 'react';
import {render} from 'react-dom';


class PetList extends Component {
    state = {
        petlist: [],
        images: []
      }

      componentDidMount() {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then((data) => {
          this.setState({ petlist: data['message'] })
          console.log(this.state.petlist)
          //console.log(this.state.petlist.message)
        })
        .catch(console.log)

        fetch(' https://dog.ceo/api/breed/australian/images')
        .then(res => res.json())
        .then((data) => {
          this.setState({ images: data })
          console.log(this.state.images)
          //console.log(this.state.petlist.message)
        })
        .catch(console.log)
      }  

      renderItems() {
        for (let key in this.state.petlist.message) {
            if (Array.isArray(this.state.petlist.message[key]) && this.state.petlist.message[key].length > 0) {
              this.state.petlist.message[key].forEach(d => console.log(d))
            }
        }
      }

      render() {

        return (
           <div className="container">
            <div className="col-xs-12">
            <h1>PET SHOP</h1>
            <div>
            {
                Object.entries(this.state.petlist).map(([key, val]) => 
                    <h2 key={key}>{key}: {val}</h2>
                )
            }
           </div>
            </div>
            </div>
        );
      } 
}

render(
    <PetList/>,
    document.getElementById('root')
)

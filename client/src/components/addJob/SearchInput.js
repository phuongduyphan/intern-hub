import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChipInput from 'material-ui-chip-input';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({


    searchIcon: {
    },

    chipInput: {
      backgroundColor: '#606f80',
    }

  })

class SearchInput extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            searchInput:[],
        }
        this.handleAddChip=this.handleAddChip.bind(this);
        this.handleDeleteChip=this.handleDeleteChip.bind(this);
    }
    handleAddChip = chip => {
      this.props.handleAddChip(chip);
    }


    immutableDelete (arr, index){
        return arr.slice(0,index).concat(arr.slice(index+1))
      }

    handleDeleteChip = (chip, index) => {
      this.props.handleDeleteChip(chip, index);
    }

    render() {
      console.log(this.props);
        return (
            <div className="mySearchInput">
                <div>
                <SearchIcon className={this.props.classes.searchIcon +' mySearchIcon'} />
                <ChipInput
                    classes={{
                        chip: this.props.classes.chipInput,
                    }}
                    className='myChipInput'
                    placeholder="Job Filter"
                    value={this.props.searchInput}
                    onAdd={chip => this.handleAddChip(chip)}
                    onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                />
                    </div>         
                <div className='divBtn'>
                <button className="btn mySearchingButton"
                  onClick={this.props.onSearchButton}
                >Search</button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SearchInput);

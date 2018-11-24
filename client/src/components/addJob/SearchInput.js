import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ChipInput from 'material-ui-chip-input';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    
    searchIcon: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit,
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
        this.setState({ searchInput: [...this.state.searchInput, chip] });
      }
    
    
    immutableDelete (arr, index){
        return arr.slice(0,index).concat(arr.slice(index+1))
      }
    
      handleDeleteChip = (chip, index) => {
        this.setState({
          searchInput: this.immutableDelete(this.state.searchInput, index)
        });
      }
    render() {
        return (
            <div className="mySearchInput">
                <SearchIcon className={this.props.classes.searchIcon +' mySearchIcon'} />
                <ChipInput
                    classes={{
                        chip: this.props.classes.chipInput,
                    }}
                    className='myChipInput'
                    placeholder="Job Filter"
                    value={this.state.searchInput}
                    onAdd={chip => this.handleAddChip(chip)}
                    onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                />
            </div>
        );
    }
}

export default withStyles(styles)(SearchInput);
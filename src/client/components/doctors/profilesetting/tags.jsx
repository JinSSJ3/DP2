import React from 'react';

import { WithContext as ReactTags } from 'react-tag-input';
 
const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];
 
class ReactTagsInput extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            tags: [
                { id: "Thailand", text: "Thailand" },
                { id: "India", text: "India" }
             ],
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
             ]
        };
     
    }
 
    handleDelete=(i)=> {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition=(tag)=> {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                   
                    delimiters={delimiters} />
            </div>
        )
    }
};
 
export default ReactTagsInput;
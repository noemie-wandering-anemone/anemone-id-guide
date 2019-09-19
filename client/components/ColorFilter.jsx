import React from 'react'

class ColorFilter extends React.Component {
    state = {
        colors: []
    }

    componentDidMount() {
        getColors()
            .then(color => {
                this.setState({ colors })
            })
    }

    render() {
        return (
            <div class='filter'>
                <label for="color">Color:</label>

                <select id="color">
                    <option value="">----</option>
                    {this.state.colors.map(color => (
                        <option key={color}>{color}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default ColorFilter
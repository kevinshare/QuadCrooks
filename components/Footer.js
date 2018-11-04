import { Component } from 'react';
import Link from 'next/link';
import EntryButtons from './Entry';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return(
      <div className="footer">
      <EntryButtons className="entryButtonsBox"/>
      <style jsx>{`
          .footer {
            display: flex;
            min-height: 8vh;
            position: fixed;
            max-height: 10vh;
            left: 0;
            bottom: 0;
            width: 100%;
            background: rgba(100, 100, 100, 0.95);;
            text-align: center;
            justify-content: center;
            align-item: center;
          }
        `}
      </style>
      </div>
    );
  }
}

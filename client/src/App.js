import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    marginTop: theme.spacing(2)
  }
})

class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() { 
    this.timer = setInterval(this.progress, 20);   // CircularProgress Bar를 0.2초 단위로 실행
    // this.callApi()
      // .then(res => this.setState({customers: res}))
      // .catch(err => console.log(err));
    axios.get('/api/customers')
      .then(res => this.setState({ customers: res.data }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    console.log(body);
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1})
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>            
          <TableBody>
            { this.state.customers ? this.state.customers.map(customer => {
              return (
                <Customer
                  key={customer.id} 
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              )
            }) :
              <TableRow>   {/* CircularProgress Bar : 서버에서 데이터를 가지고 오지 않았다면  */}
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default withStyles(styles)(App);
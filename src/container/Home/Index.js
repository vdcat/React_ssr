import React, { Component } from 'react'
// 同构:一套react代码  在服务器执行一次 在客户端再执行一次 解决点击事件无效的问题
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div dangerouslySetInnerHTML={{__html: this.props.list}}/>
            </div>
        )
    }
    componentDidMount() {
        this.props.getHomeList()
    }
}
const mapStateToProps = state => ({
    list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
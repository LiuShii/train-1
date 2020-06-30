var Container = ReactBootstrap.Container
var Nav = ReactBootstrap.Nav
const Header = (props) => {
    const menuItem = [
        'All',
        'Javascript',
        'Ruby',
        'Java',
        'CSS',
        'Python'
    ]
    return (
        <div>
            <Container>
                <Nav>
                    {menuItem.map((item, key) => <Nav.Item key={key}><Nav.Link>{item}</Nav.Link></Nav.Item>)}
                </Nav>
            </Container>
        </div>
    )
}

const Content = (props) => (
    <div>
        <Container>
            {props.children}
        </Container>
    </div>
)

const Footer = (props) => (
    <div>
        <Container>
            {props.children}
        </Container>
    </div>
)

const App = (props) => (
    <div className="container">
        <Header />
        <Content>
            <div>内容</div>
        </Content>
        <Footer>
            <div>底部</div>
        </Footer>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('container')
)
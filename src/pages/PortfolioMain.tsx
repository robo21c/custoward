import Layout from '../components/Layout/Layout';
import Homecontainer from '../containers/Home/Homecontainer';
import { Helmet } from 'react-helmet-async';

const PortfolioMain: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta property="og:title" content="Davi-Davi" />
                <meta property="og:description" content="Davi-Davi design studio, Since 2019" />
            </Helmet>
            <div>
                <div className="bg"></div>
                <Layout>
                <div>This is portfolio</div>
                <div>In construction</div>
                </Layout>
            </div>
        </>
    )
}

export default PortfolioMain
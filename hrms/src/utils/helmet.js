import {Helmet} from "react-helmet"
import { PropTypes } from "prop-types";

const Helmet=({title})=>{
<Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
}
Helmet.propTypes={
    title: PropTypes.string,
}

export default Helmet
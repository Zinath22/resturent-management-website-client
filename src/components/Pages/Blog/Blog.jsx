import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div className="px-10 md:py-12 space-y-4">
            <Helmet>
                <title>FoodLove | Blog</title>
            </Helmet>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What is One way data binding?
                </div>
                <div className="collapse-content">
                    <p>  One-way data binding is commonly used in frameworks like AngularJS (version 1.x) and can simplify the management of data and the updating of the UI, making it easier to maintain a consistent state between the data source and the user interface. <br />
                        Here a simplified explanation of one-way data binding: <br />

                        1.Data source (Model): This is where your applications data is stored or managed. It can be variables, objects, or data retrieved from a server or database. <br />

                        2.User Interface (UI): The UI represents how the data is presented to the user. This can include HTML templates, views, or any other means of displaying information to the user.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What is NPM in node.js?
                </div>
                <div className="collapse-content">
                    <p> NPM stands for Node Package Manager <br />
                        It is one of the most widely used package managers for the Node.js JavaScript runtime environment. NPM is used to manage and distribute packages (libraries and modules) of reusable code that can be easily integrated into Node.js projects. <br />

                        When you install Node.js, you also get NPM, which simplifies the process of managing packages and dependencies for your Node.js projects. You can use NPM to install, update, and manage both locally and globally installed packages, making it an essential tool for Node.js development.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    Different between Mongodb database vs mySQL database
                </div>
                <div className="collapse-content">
                    <p> Here a comparison of MongoDB and MySQL: <br />
                        MongoDB:1. MongoDB is a NoSQL database, which means it uses a document-oriented data model. It stores data in flexible, JSON-like BSON (Binary JSON) documents. Each document can have a different structure, allowing for more schema flexibility.
                        <br />
                        2. MongoDB uses a query language for querying documents that is similar to JavaScript object notation (JSON). It supports rich queries and aggregation operations.

                        <br />
                        MySQL:1. MySQL is a relational database management system (RDBMS) that uses a tabular data model. It stores data in tables with predefined schemas, where rows represent records, and columns represent attributes.<br />

                        2. MySQL uses SQL (Structured Query Language) for querying data. SQL is a powerful language for working with structured data and supports complex relational queries.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

// tabIndex=0 One-way data binding is commonly used in frameworks like AngularJS (version 1.x) and can simplify the management of data and the updating of the UI, making it easier to maintain a consistent state between the data source and the user interface.
// Here a simplified explanation of one-way data binding:
// 1.Data source (Model): This is where your applications data is stored or managed. It can be variables, objects, or data retrieved from a server or database.
// 2.User Interface (UI): The UI represents how the data is presented to the user. This can include HTML templates, views, or any other means of displaying information to the user.


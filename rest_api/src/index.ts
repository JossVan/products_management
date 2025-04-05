import server from './server';
import colors from 'colors';

const port = process.env.PORT || 4000;
server.listen(4000, () => {
    console.log(colors.bgCyan.bold(`Server is running on port ${port}`));
});
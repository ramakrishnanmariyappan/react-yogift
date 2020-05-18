import React, { PureComponent } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, List } from 'react-virtualized';
import { Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import 'react-virtualized/styles.css';

class MuiVirtualizedTable extends PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    _rowRenderer = ({ key, index, style }) => {
        const { columns } = this.props;
        return (
            <div
                className="Row"
                key={key}
                style={{
                    ...style,
                    whiteSpace: "pre",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%"
                }}
            >
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} sm={1} lg={1}>
                                <Avatar>{columns[index].first_name}</Avatar>
                            </Grid>
                            <Grid item xs={12} sm={5} lg={5}>
                                <Typography color="textPrimary" variant="h6">
                                    Name: {columns[index].first_name} {columns[index].last_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={3}>
                                <Typography variant="body2">
                                    Email: {columns[index].email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </div>
        );
    }

    render() {
        const { columns } = this.props;
        return (
            <div style={{ flex: '1 1 auto', height: '74vh' }}>
                <AutoSizer disableWidth>
                    {({ height }) => (
                        <List
                            width={1}
                            height={height}
                            overscanRowsCount={2}
                            rowCount={columns.length}
                            rowHeight={100}
                            rowRenderer={this._rowRenderer}
                            containerStyle={{
                                width: "100%",
                                maxWidth: "100%"
                            }}
                            style={{
                                width: "100%"
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
        );
    }
}

const VirtualizedTable = MuiVirtualizedTable;

export default function ReactVirtualizedTable(props) {
    const { usersDetails } = useSelector(state => ({
        usersDetails: state.users.UsersDetails
    }));
    return (
        <Paper style={{ width: 100 + '%', height: 100 + '%' }}>
            <VirtualizedTable
                rowCount={usersDetails.length}
                rowGetter={({ index }) => usersDetails[index]}
                columns={usersDetails}
            />
        </Paper>
    );
}
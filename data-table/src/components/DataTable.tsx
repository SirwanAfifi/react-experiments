import * as React from "react";

enum FieldType {
  Date,
  String
}

type HeaderType = {
  title: string;
  type?: FieldType;
};

interface DataTableProps {
  headers: HeaderType[];
  rows: any[];
}

const DataTable = (props: DataTableProps) => {
  const [source] = React.useState(props.rows);
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map(h => (
            <td key={h.title}>{h.title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {source.map(row => (
          <tr>
            {Object.entries(row).map(([key, value]: any) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { DataTable };

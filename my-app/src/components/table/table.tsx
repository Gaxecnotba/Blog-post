"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

interface NewsItem {
  id: number;
  name: string;
  publish_date: string;
  description: string;
}

interface PostTableProps {
  news: NewsItem[];
}

const columns = [
  { key: "name", label: "Title" },
  { key: "description", label: "Description" },
  { key: "publish_date", label: "Published" },
  { key: "actions", label: "Actions" },
];

const getKeyValue = (item: NewsItem, key: string): string => {
  return item[key as keyof NewsItem] as string;
};

export default function PostTable({ news }: PostTableProps) {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {news.map((item) => (
          <TableRow key={item.id}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.key === "actions" ? (
                  <div className="flex items-center gap-2">
                    <Button color="warning" variant="flat">
                      Edit
                    </Button>
                    <Button color="danger" variant="flat">
                      Delete
                    </Button>
                  </div>
                ) : (
                  getKeyValue(item, column.key)
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

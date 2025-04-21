
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RecommendedDate {
  date: string;
  reason: string;
}

interface RecommendedDatesTableProps {
  dates: RecommendedDate[];
}

const RecommendedDatesTable = ({ dates }: RecommendedDatesTableProps) => {
  return (
    <Card className="w-full bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recommended Dates</CardTitle>
        <CardDescription>
          Dates aligned with your personal cosmic pattern
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Dates selected based on multidisciplinary analysis</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dates.map((date, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                <TableCell className="font-medium">{date.date}</TableCell>
                <TableCell>{date.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecommendedDatesTable;

import clsx from 'clsx';

interface TableProps {
  headers: string[]; // An array of strings for column headers
  rows: string[][]; // A 2D array of strings for table rows
  isMono: boolean;
}

export default function Table({ headers, rows, isMono = false }: TableProps) {
  return (
    <div className='mt-6 overflow-x-auto'>
      <table className='w-full table-auto border-b border-zinc-200 dark:border-zinc-800'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className='px-2 py-2.5 text-left text-sm/6 font-semibold text-zinc-950 dark:text-zinc-50'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='border-t border-zinc-950/5 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className='not-last:border-b not-last:border-zinc-200 dark:not-last:border-zinc-800'
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{ fontVariantLigatures: 'none' }}
                  className={clsx(
                    'px-2 py-2 align-top text-sm/6 text-zinc-700 dark:text-zinc-300',
                    isMono && 'font-mono [font-variant-ligatures:none]',
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* 
import Table from '@/components/table';
<Table
  headers={['Name', 'Age']}
  rows={[
    ['Alice', '22'],
    ['Bob', '28'],
  ]}
/>
*/

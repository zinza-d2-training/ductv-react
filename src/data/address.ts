import { Ward, District, Province, DataTable, Column } from '../types';

export const columns: readonly Column[] = [
  {
    id: 'index',
    label: 'STT',
    minWidth: 10,
    align: 'center'
  },
  {
    id: 'address',
    label: 'Tên điểm tiêm',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'street',
    label: 'Số nhà, tên đường',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'ward',
    label: 'Xã/Phường',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'district',
    label: 'Quận/Huyện',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'province',
    label: 'Tỉnh/Thành phố',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'boardMember',
    label: 'Người đứng đầu cơ sở tiêm chủng',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'countTableInjection',
    label: 'Số bàn tiêm',
    minWidth: 50,
    align: 'center'
  }
];

function createData(
  index: number,
  address: string,
  street: string,
  ward: Ward,
  district: District,
  province: Province,
  boardMember: string,
  countTableInjection: number
): DataTable {
  return {
    index,
    address,
    street,
    ward,
    district,
    province,
    boardMember,
    countTableInjection
  };
}

export const dataAddress: Province[] = [
  {
    id: 1,
    name: 'Thành phố Hà Nội',
    districts: [
      {
        id: 1,
        name: 'Quận Ba Đình',
        wards: [
          {
            id: 1,
            name: 'Phường Phúc Xá'
          },
          {
            id: 2,
            name: 'Phường Vĩnh Phúc'
          }
        ]
      },
      {
        id: 2,
        name: 'Quận Cầu Giấy',
        wards: [
          {
            id: 3,
            name: 'Phường Nghia Tan'
          },
          {
            id: 4,
            name: 'Phường Quan Hoa'
          }
        ]
      },
      {
        id: 3,
        name: 'Quận Hà Đông',
        wards: [
          {
            id: 5,
            name: 'Phường Nghia Tan 1'
          },
          {
            id: 6,
            name: 'Phường Quan Hoa 2'
          }
        ]
      },
      {
        id: 4,
        name: 'Quận Ba Đình 2'
      }
    ]
  },
  {
    id: 2,
    name: 'Tỉnh Hà Giang'
  },
  {
    id: 3,
    name: 'Tỉnh Cao Bằng'
  },
  {
    id: 4,
    name: 'Tỉnh Hà Nam'
  },
  {
    id: 5,
    name: 'Tỉnh Lào Cai'
  },
  {
    id: 6,
    name: 'Tỉnh Điện Biên'
  }
];

export const dataTables: DataTable[] = [
  createData(
    1,
    'Trạm ý thế Phường Phúc Xá',
    '84 Nghĩa Dũng',
    {
      id: 1,
      name: 'Phường Phúc Xá'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 1',
    1
  ),
  createData(
    2,
    'Bệnh viện Đa khoa Medlatec',
    '42-44 Nghĩa Dũng',
    {
      id: 2,
      name: 'Phường Vĩnh Phúc'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 2',
    1
  ),
  createData(
    3,
    'Trạm ý thế Phường Phúc Xá 2',
    '84 Nghĩa Dũng 2',
    {
      id: 1,
      name: 'Phường Phúc Xá'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 3',
    1
  ),
  createData(
    4,
    'Bệnh viện Đa khoa Medlatec 4',
    '42-44 Nghĩa Dũng 4',
    {
      id: 2,
      name: 'Phường Vĩnh Phúc'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 4',
    1
  ),
  createData(
    5,
    'Trạm ý thế Phường Phúc Xá 5',
    '84 Nghĩa Dũng 5',
    {
      id: 1,
      name: 'Phường Phúc Xá'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 5',
    1
  ),
  createData(
    6,
    'Bệnh viện Đa khoa Medlatec 6',
    '42-44 Nghĩa Dũng 6',
    {
      id: 2,
      name: 'Phường Vĩnh Phúc'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 6',
    1
  ),
  createData(
    7,
    'Trạm ý thế Phường Phúc Xá 7',
    '84 Nghĩa Dũng 7',
    {
      id: 1,
      name: 'Phường Phúc Xá'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 7',
    1
  ),
  createData(
    8,
    'Bệnh viện Đa khoa Medlatec 8',
    '42-44 Nghĩa Dũng 8',
    {
      id: 2,
      name: 'Phường Vĩnh Phúc'
    },
    {
      id: 1,
      name: 'Quận Ba Đình'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 8',
    1
  ),
  createData(
    9,
    'Bệnh viện Đa khoa Medlatec 9',
    '42-44 Nghĩa Dũng 9',
    {
      id: 3,
      name: 'Phường Nghia Tan'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 9',
    1
  ),
  createData(
    10,
    'Bệnh viện Đa khoa Medlatec 10',
    '42-44 Nghĩa Dũng 10',
    {
      id: 4,
      name: 'Phường Quan Hoa'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 10',
    1
  ),
  createData(
    11,
    'Bệnh viện Đa khoa Medlatec 11',
    '42-44 Nghĩa Dũng 11',
    {
      id: 3,
      name: 'Phường Nghia Tan'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 11',
    1
  ),
  createData(
    12,
    'Bệnh viện Đa khoa Medlatec 12',
    '42-44 Nghĩa Dũng 12',
    {
      id: 4,
      name: 'Phường Quan Hoa'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 12',
    1
  ),
  createData(
    13,
    'Bệnh viện Đa khoa Medlatec 13',
    '42-44 Nghĩa Dũng 13',
    {
      id: 2,
      name: 'Phường Quan Hoa'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 13',
    1
  ),
  createData(
    14,
    'Bệnh viện Đa khoa Medlatec 14',
    '42-44 Nghĩa Dũng 14',
    {
      id: 3,
      name: 'Phường Nghia Tan'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 14',
    1
  ),
  createData(
    15,
    'Bệnh viện Đa khoa Medlatec 15',
    '42-44 Nghĩa Dũng 15',
    {
      id: 2,
      name: 'Phường Quan Hoa'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 15',
    1
  ),
  createData(
    16,
    'Bệnh viện Đa khoa Medlatec 16',
    '42-44 Nghĩa Dũng 16',
    {
      id: 4,
      name: 'Phường Nghia Tan'
    },
    {
      id: 2,
      name: 'Quận Cầu Giấy'
    },
    {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    'Đỗ Thế Bảo 16',
    1
  )
];

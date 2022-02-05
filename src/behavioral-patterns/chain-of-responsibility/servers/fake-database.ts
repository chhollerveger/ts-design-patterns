import PermissionType from "./permission-type";

interface IFakeDatabaseItem {
  email: string;
  password: string;
  permission: PermissionType
}

const FakeDatabase: IFakeDatabaseItem[] = [
  {
    email: "peter.parker@avangers.com",
    password: "iloveunclestark",
    permission: PermissionType.USER
  },
  {
    email: "tony.stark@avangers.com",
    password: "iamironman",
    permission: PermissionType.ADMIN
  },
  {
    email: "thor@avangers.com",
    password: "123456",
    permission: PermissionType.USER
  }
];

export default FakeDatabase;
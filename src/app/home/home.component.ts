import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  numberdisplay = 'عرض الرقم';
  protocolName = 'فودافون مصر';
  phoneNumber = '012345678910';
  country = 'المملكة الأردنية الهاشمية';
  countryFlag = '../../assets/imgs/flag.png';
  balance = 5000;
  currentClient = 'الشركة الألمانية للإبادة';
  head1='تاريخ الشحنه';
  head2='الرصيد الحالي';
  head3='الرصيد المستخدم للعميل الحالي';
  head4='الرصيد المستدم للرقم ككل';
  currency='ج.م' ;
  craatename = 'تم الأنشاء بواسطة';
name = 'عبدالرحيم إسماعيل ناصف';
img = '/assets/1.png';
dateofcreation = 'تاريخ الإنشاء';
date = '02/02/2025';
time = '04:00' + ' م'; 

tableData = [
  {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/imgs/company.png',
    assignDate: '01/12/2024',
    cancelDate: '',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  },
  {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '/assets/imgs/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  },
  {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  },
  {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }, {
    client: 'الشركة الألمانية للإبادة ',
    clientLogo: '../../assets/company.png',
    assignDate: '01/12/2024',
    cancelDate: '01/12/2024',
    assignee: 'عبدالرحيم إسماعيل ناصف',
    internationalMinutes: 122,
    localMinutes: 7654,
    amount: 61890
  }
];

page: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = Math.ceil(this.tableData.length / this.itemsPerPage);
  pagesArray: number[] = Array.from({ length: this.totalPages }, (_, i) => i + 1).reverse();

  getCurrentPageData() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    return this.tableData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(pageNum: number) {
    this.page = pageNum;
  }

  onItemsPerPageChange() {
    this.page = 1;
    this.totalPages = Math.ceil(this.tableData.length / this.itemsPerPage);
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}

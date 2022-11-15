import { TestBed } from '@angular/core/testing';
import { PhotoService } from './photo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  MOCK_PHOTO_LIST,
  MOCK_PHOTO_RESPONSE,
} from '../../shared/mocks/photos';
import { HttpClient } from '@angular/common/http';

const MOCK_PAGE = 1;
const MOCK_LIMIT = 3;

describe('PhotoService', () => {
  let service: PhotoService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PhotoService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should call getAllBooks and return an array of Books', () => {
  //   service.getProducts(MOCK_PAGE).subscribe(res => {
  //     expect(res).toEqual(MOCK_PHOTO_LIST);
  //   });

  //   const req = httpController.expectOne({
  //     method: 'GET',
  //     url: `${url}/products?limit=${MOCK_LIMIT}`,
  //   });

  //   req.flush(MOCK_PHOTO_LIST);
  // });
});

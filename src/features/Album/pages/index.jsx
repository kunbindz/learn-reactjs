import React from 'react';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {id : 1 ,
        name : "Chenh venh",
        thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/3/c/2/73c22a95c1af63ecb6b33f3f7bb5ba79.jpg"
        },
        {id : 2 ,
         name : "Hoa hai duong",
        thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg"
        },
        {id : 3 ,
         name : "Ke dien vi tinh",
        thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/9/f/6/69f621e3a5655a7c984664e893af70ab.jpg"
        }
    ]
    return (
        <div>
            <h3> danh sach bai hat </h3>
            <AlbumList albumList= {albumList} />

        </div>
    );
}

export default AlbumFeature;